package com.pilot.pep.AppConfig.JwtSetup;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/*
    Handle token generation, validation, and extracting info
 */
@Component
public class JwtUtil {

    @Value("${pep.app.jwt.expiration.ms}")
    String duration;

    @Value("${pep.app.jwt.secret}")
    String secret;

    public String generateToken(String username, List<String> roles){
        Map<String, Object> claims = new HashMap<>();
        claims.put("roles", roles);

        return Jwts.builder()
                .setSubject(username)
                .setClaims(claims)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + Integer.parseInt(duration)))
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }

    public String extractUserName(String token){
        return extractClaims(token).getSubject();
    }

    public Date extractExpiration(String token){
        return extractClaims(token).getExpiration();
    }

    public boolean isTokenExpired(Date expiration){
        return expiration.before(new Date());
    }

    public String extractUserRole(String token){
        return (String) extractClaims(token).get("role");
    }

    public boolean validateToken(String token, UserDetails userDetails){
        return extractUserName(token).equals(userDetails.getUsername())
                && isTokenExpired(extractExpiration(token));
    }

    public Claims extractClaims(String token){
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
    }
}
