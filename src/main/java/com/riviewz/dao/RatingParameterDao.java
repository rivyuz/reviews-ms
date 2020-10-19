package com.riviewz.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.riviewz.model.RatingParameter;

public interface RatingParameterDao extends JpaRepository<RatingParameter, Integer> {
	
	@Query(value="SELECT * FROM rating_parameter WHERE index_catg = :category ", nativeQuery = true)
	RatingParameter getParameters(@Param("category") String category);	
	
}