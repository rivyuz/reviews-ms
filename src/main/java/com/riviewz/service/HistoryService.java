package com.riviewz.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.riviewz.dao.HistoryDao;
import com.riviewz.dao.RatingParameterDao;
import com.riviewz.model.RatingParameter;
import com.riviewz.model.User;

@Service
public class HistoryService {
	
	@Autowired
	HistoryDao historyDao;
	
	@Autowired
	RatingParameterDao ratingParameterDao;

	public List<User> getHistory(int userFk) {
		return historyDao.findByUserFk(userFk);
	}		
	
	public User getRecordToEdit(int userFk, int entityFk, String category) {
		return historyDao.findByUserFkAndEntityFkAndIndexCatg(userFk, entityFk, category);
	}	
	
	public RatingParameter getParameters(String category) {
		return ratingParameterDao.getParameters(category);
	}

}