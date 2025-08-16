package com.project;

import com.project.Exception.GlobalException;
import com.project.entity.ErrorCode;
import com.project.entity.Role;
import com.project.entity.User;
import com.project.enums.RoleType;
import com.project.repository.RoleRepository;
import com.project.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Set;

@SpringBootApplication
@Log4j2
@RequiredArgsConstructor
public class ExamPortalBackendApplication {

	private final UserRepository userRepository;

	private final PasswordEncoder passwordEncoder;

	private final RoleRepository roleRepository;

	public static void main(String[] args) {
		SpringApplication.run(ExamPortalBackendApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(){
		return args -> {
			if(userRepository.findByEmail("admin@gmail.com") == null) {
				log.info("Creating default admin user");
				User user = new User();
				user.setActive(true);
				user.setPassword(passwordEncoder.encode("Password@123"));
				user.setEmail("admin@gmail.com");
				user.setPhone("1234567890");
				user.setFirstName("admin");
				user.setLastName("");
				Set<Role> availableRoles = roleRepository.findByNameIn(Set.of(RoleType.ADMIN));
				if (availableRoles.isEmpty()) {
					throw new GlobalException(ErrorCode.ROLE_NOT_FOUND);
				}
				user.setRoles(availableRoles);
				userRepository.save(user);
				log.info("Admin user created");
			}
		};
	}

}
