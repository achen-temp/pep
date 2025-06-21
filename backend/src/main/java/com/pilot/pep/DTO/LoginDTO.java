package com.pilot.pep.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginDTO {

    private String token;
    private String username;
    private List<String> roles;

}
