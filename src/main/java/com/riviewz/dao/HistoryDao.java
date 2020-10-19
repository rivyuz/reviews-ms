package com.riviewz.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.riviewz.model.User;

public interface HistoryDao extends JpaRepository<User, Integer> {

	List<User> findByUserFk(int userFk);
	
	User findByUserFkAndEntityFkAndIndexCatg(int userFk, int entityFk, String category);
	
}