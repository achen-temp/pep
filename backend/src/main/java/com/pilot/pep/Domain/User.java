package com.pilot.pep.Domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "app_user")
@NoArgsConstructor
public class User {
    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", role='" + role + '\'' +
                '}';
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    Long id;
    String email;
    String password;
    String role;

    public User(String email, String password, UserRole role) {
        this.email = email;
        this.password = password;
        this.role = role.name();
    }
}
