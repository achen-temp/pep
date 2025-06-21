package com.pilot.pep.Service;

import com.pilot.pep.Domain.User;
import com.pilot.pep.Domain.UserRole;
import com.pilot.pep.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    private User adminUser(){
        return new User("admin@demo.com",
                passwordEncoder.encode("000000"),
                UserRole.ADMIN);
    }

    private User demoUser(){
        return new User("user@demo.com",
                passwordEncoder.encode("111111"),
                UserRole.USER);
    }

    public User findUserByEmail(String email){
        if(email.equals("admin@demo.com")) return adminUser();
        if(email.equals("user@demo.com")) return demoUser();
        return userRepository.findByEmail(email);
    }

    public void saveUser(User user) throws Exception {
        if(userRepository.findByEmail(user.getEmail()) != null){
            throw new Exception("User Already Exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        this.userRepository.save(user);
    }
}
