package com.project.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "USERS")
@AllArgsConstructor
@Data
public class User {
    @Id
    private String id;
    private boolean active;
    private String password;
    private String email;
    private String phone;
    private String firstName;
    private String lastName;

    @ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinTable(
            name = "user_roles", // join table
            joinColumns = @JoinColumn(name = "user_id"), // foreign key to User
            inverseJoinColumns = @JoinColumn(name = "role_id") // foreign key to Role
    )
    private Set<Role> roles = new HashSet<>();
    public User(){
        this.id = UUID.randomUUID().toString();
    }
}
