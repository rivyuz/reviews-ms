package com.riviewz.controller;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.riviewz.feign.UserProxy;
import com.riviewz.model.RatingParameter;
import com.riviewz.model.User;
import com.riviewz.service.HistoryService;
import com.riviewz.util.JwtUtils;

@RestController
@RequestMapping("/reviews")
public class HistoryController {

	@Autowired
	private JwtUtils jwtUtils;

	@Autowired
	HistoryService historyService;
	
	//@Autowired
	//UserProxy userProxy;

	/*----------AJAX call from myaccount.js----------*/
	@CrossOrigin
	@GetMapping("/history")	
	public List<User> getReviewsByUser(@RequestParam(value="j") String jwt) throws Exception {
		
		Map<String, Object> userData = jwtUtils.verifyJwtAndGetData(jwt);
		
		int userId = (int) userData.get("userId");
		
		List<User> reviewList = (List<User>) historyService.getHistory(userId);
		
		for(int i=0; i < reviewList.size(); i++) {
			Timestamp ts = reviewList.get(i).getDate();
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MMM-yyyy");
			simpleDateFormat.format(ts);
			reviewList.get(i).setDateStr(simpleDateFormat.format(ts));			
		}

		return reviewList;
	}
	

	/*----------AJAX call from myaccount.js----------*/
	@CrossOrigin
	@GetMapping("/record")	
	public Map<String, Object> getRecordToEdit(@RequestParam(value="category") String category, @RequestParam(value="entity_id") String entityFk, @RequestParam(value="j") String jwt, HttpSession session, HttpServletResponse response) throws Exception {
		
		Map<String, Object> userData = jwtUtils.verifyJwtAndGetData(jwt);
		
		int userId = (int) userData.get("userId");
		
		Map<String, Object> reviewMap = new LinkedHashMap<String, Object>();
		RatingParameter parameterList =  historyService.getParameters(category);
		parameterList.setIndexCatg(category);
		parameterList.setEntityId(entityFk);
		reviewMap.put("parameterList", parameterList);
		
		User review = (User) historyService.getRecordToEdit(userId, Integer.parseInt(entityFk), category);
		parameterList.setEntityName(review.getEntityName());;
		reviewMap.put("reviews", review);
		
		return reviewMap;
	}

}