package com.pilot.pep.Domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    Integer id;
    String email;
    String password;
    String role;

    public User(String email, String password, UserRole role) {
        this.email = email;
        this.password = password;
        this.role = role.name();
    }
}
