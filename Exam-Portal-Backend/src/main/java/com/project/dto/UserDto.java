package com.project.dto;

import com.project.enums.RoleType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class UserDto {

    private String id;
    private boolean active;
    private String password;
    private String email;
    private String phone;
    private String firstName;
    private String lastName;
    private Set<RoleType> roles;
}
