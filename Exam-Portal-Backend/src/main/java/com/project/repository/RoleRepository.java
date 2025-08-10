package com.project.repository;

import com.project.enums.RoleType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.entity.Role;

import java.util.List;
import java.util.Set;

@Repository
public interface RoleRepository extends JpaRepository<Role, String> {
    // ...custom query methods if needed...
    Set<Role> findByNameIn(Set<RoleType> roleTypes);
}

