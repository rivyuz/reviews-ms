package com.riviewz.service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.riviewz.dao.RatingParameterDao;
import com.riviewz.dao.ReviewsDao;
import com.riviewz.feign.EntitiesProxy;
import com.riviewz.model.RatingParameter;
import com.riviewz.model.User;
import com.riviewz.util.Util;

@Service
public class ReviewsService {
	
	@Autowired
	ReviewsDao reviewsDao;
	
	@Autowired
	RatingParameterDao ratingParameterDao;
	
	@Autowired
	EntitiesProxy entitiesProxy;
	
	public RatingParameter getParameters(String category) {
		return ratingParameterDao.getParameters(category);
	}	
	
	public List<User> getLatestReviews() {
		return reviewsDao.findLatestReviews();
	}

	public List<User> getReviewsByEntity(String category, String entityFk) {
		
		RatingParameter ratingParameterList =  ratingParameterDao.getParameters(category);
		
		float rp_1 = 0;
		float rp_2 = 0;
		float rp_3 = 0;
		float rp_4 = 0;
		float rp_5 = 0;
		float rp_6 = 0;
		float rp_7 = 0;
		float rp_8 = 0;		
		
		List<User> revList =  reviewsDao.findByIndexCatgAndEntityFk(category, Integer.parseInt(entityFk));
		if(null != revList && revList.size() != 0) {
			for(int i = 0; i < revList.size(); i++) {
				rp_1 = rp_1 + Util.calculateStarRatingForIndividualParameter(revList.get(i).getRating_1()); 
				rp_2 = rp_2 + Util.calculateStarRatingForIndividualParameter(revList.get(i).getRating_2());
				rp_3 = rp_3 + Util.calculateStarRatingForIndividualParameter(revList.get(i).getRating_3());
				rp_4 = rp_4 + Util.calculateStarRatingForIndividualParameter(revList.get(i).getRating_4());
				rp_5 = rp_5 + Util.calculateStarRatingForIndividualParameter(revList.get(i).getRating_5());
				rp_6 = rp_6 + Util.calculateStarRatingForIndividualParameter(revList.get(i).getRating_6());
				rp_7 = rp_7 + Util.calculateStarRatingForIndividualParameter(revList.get(i).getRating_7());
				rp_8 = rp_8 + Util.calculateStarRatingForIndividualParameter(revList.get(i).getRating_8());
			}
			rp_1 = rp_1 / revList.size();
			rp_2 = rp_2 / revList.size();
			rp_3 = rp_3 / revList.size();
			rp_4 = rp_4 / revList.size();
			rp_5 = rp_5 / revList.size();
			rp_6 = rp_6 / revList.size();
			rp_7 = rp_7 / revList.size();
			rp_8 = rp_8 / revList.size();
			
			revList.get(0).setRp_1(rp_1);
			revList.get(0).setRp_2(rp_2);
			revList.get(0).setRp_3(rp_3);
			revList.get(0).setRp_4(rp_4);
			revList.get(0).setRp_5(rp_5);
			revList.get(0).setRp_6(rp_6);
			revList.get(0).setRp_7(rp_7);
			revList.get(0).setRp_8(rp_8);
			
			revList.get(0).setParameter_1(ratingParameterList.getParameter1());
			revList.get(0).setParameter_2(ratingParameterList.getParameter2());
			revList.get(0).setParameter_3(ratingParameterList.getParameter3());
			revList.get(0).setParameter_4(ratingParameterList.getParameter4());
			revList.get(0).setParameter_5(ratingParameterList.getParameter5());
			revList.get(0).setParameter_6(ratingParameterList.getParameter6());
			revList.get(0).setParameter_7(ratingParameterList.getParameter7());
			revList.get(0).setParameter_8(ratingParameterList.getParameter8());
		}		
		return revList;
	}
	
	public List<User> getReviewsByUser(String category, String userFk) {
		return reviewsDao.findByIndexCatgAndUserFk(category, Integer.parseInt(userFk));
	}	

	public User saveReview(
								String indexCatg,
								String entityName,
								String entityFk,
								int userFk,
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
								String comment
			)
	{
		
		User review = new User();
		
		review.setIndexCatg(indexCatg);
		review.setEntityName(entityName);
		review.setEntityFk(Integer.parseInt(entityFk));
		review.setUserFk(userFk);

		review.setParameter_1(parameter_1);
		review.setParameter_2(parameter_2);
		review.setParameter_3(parameter_3);
		review.setParameter_4(parameter_4);
		review.setParameter_5(parameter_5);
		review.setParameter_6(parameter_6);
		review.setParameter_7(parameter_7);
		review.setParameter_8(parameter_8);
		review.setRating_1(rating_1);
		review.setRating_2(rating_2);
		review.setRating_3(rating_3);
		review.setRating_4(rating_4);
		review.setRating_5(rating_5);
		review.setRating_6(rating_6);
		review.setRating_7(rating_7);
		review.setRating_8(rating_8);		
		float starRating = Util.calculateRating(rating_1, rating_2, rating_3, rating_4, rating_5, rating_6, rating_7, rating_8);
		review.setStarRating(starRating);
		
		review.setComment(comment);
		
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		review.setDate(timestamp);
		
		int result = reviewsDao.updateReviews(starRating, new Date(), parameter_1, parameter_2, parameter_3, parameter_4, parameter_5, parameter_6, parameter_7, parameter_8, rating_1, rating_2, rating_3, rating_4, rating_5, rating_6, rating_7, rating_8, comment, indexCatg, entityName, Integer.parseInt(entityFk), userFk);
		
		if (result == 0) {
			reviewsDao.save(review);
			entitiesProxy.updateCounter(indexCatg, review.getEntityFk());	
		}
		
		return review;
	}
	
	public User deleteReview( String indexCatg, String entityName, String entityFk, int userFk )
	{
		User review = new User();
		
		review.setIndexCatg(indexCatg);
		review.setEntityName(entityName);
		review.setEntityFk(Integer.parseInt(entityFk));
		review.setUserFk(userFk);
		
		int result = reviewsDao.deleteReviews(indexCatg, entityName, Integer.parseInt(entityFk), userFk);
		
		if (result == 1) {
			entitiesProxy.decrementCounter(indexCatg, review.getEntityFk());	
		}
		
		return review;
	}
	
}