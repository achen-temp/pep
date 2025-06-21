package com.pilot.pep.Controller;

import com.pilot.pep.AppConfig.JwtSetup.JwtUtil;
import com.pilot.pep.DTO.AuthRequest;
import com.pilot.pep.DTO.LoginDTO;
import com.pilot.pep.Domain.User;
import com.pilot.pep.Domain.UserRole;
import com.pilot.pep.Service.AuthenticationUserDetailsService;
import com.pilot.pep.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/pilot/auth")
public class AuthController {

    @Autowired
    AuthenticationUserDetailsService userDetailsService;

    @Autowired
    JwtUtil jwtUtil;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserService userService;

    @PostMapping("/signup")
    public void signup(@RequestBody AuthRequest request) throws Exception {
        //need logic to verify if the email is valid
        User newUser = new User(request.getUsername(), request.getPassword(), UserRole.USER);
        userService.saveUser(newUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request){
        try{
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
            );
            UserDetails user = userDetailsService.loadUserByUsername(request.getUsername());
            List<String> roles = user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList());
            String token  = jwtUtil.generateToken(user.getUsername(), roles);
            return ResponseEntity.ok(new LoginDTO(token, user.getUsername(), roles));
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Bad Credentials");
        }

    }
}
