package com.riviewz.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.riviewz.model.User;

public interface ReviewsDao extends JpaRepository<User, Integer> {

	@Query(value="SELECT * FROM reviews ORDER BY date DESC Limit 7", nativeQuery = true)
	List<User> findLatestReviews();
	
	List<User> findByIndexCatgAndEntityFk(String category, int entityFk);
	
	List<User> findByIndexCatgAndUserFk(String category, int userFk);
	
	
	@Modifying
	@Query(value="UPDATE reviews SET star_rating = ?1, date = ?2, parameter_1 = ?3, parameter_2 = ?4, parameter_3 = ?5, parameter_4 = ?6, parameter_5 = ?7, parameter_6 = ?8, parameter_7 = ?9, parameter_8 = ?10, rating_1 = ?11, rating_2 = ?12, rating_3 = ?13, rating_4 = ?14, rating_5 = ?15, rating_6 = ?16, rating_7 = ?17, rating_8 = ?18, comment = ?19 WHERE index_catg = ?20 AND entity_name = ?21 AND entity_fk = ?22 AND user_fk = ?23", nativeQuery = true)
	@Transactional
	int updateReviews(
			float starRating,
			Date date,
			String parameter_1,
			String parameter_2,
			String parameter_3,
			String parameter_4,
			String parameter_5,
			String parameter_6,
			String parameter_7,
			String parameter_8,
			String rating_1,
			String rating_2,
			String rating_3,
			String rating_4,
			String rating_5,
			String rating_6,
			String rating_7,
			String rating_8,
			String comment,
			String indexCatg,
			String entityName,
			int entityFk,
			int userFk			
			);	

	@Modifying
	@Query(value="DELETE FROM reviews WHERE index_catg = ?1 AND entity_name = ?2 AND entity_fk = ?3 AND user_fk = ?4", nativeQuery = true)
	@Transactional
	int deleteReviews(String indexCatg, String entityName, int entityFk, int userFk );
	
}

