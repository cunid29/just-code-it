package com.justcodeit.db;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.justcodeit.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
}


//package com.justcodeit.db;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import com.justcodeit.model.User;
//
//public interface UserRepository extends JpaRepository<User, Long> {
//}