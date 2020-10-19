package com.riviewz.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.riviewz.feign.UserProxy;
import com.riviewz.model.User;
import com.riviewz.service.HistoryService;
import com.riviewz.service.ReviewsService;
import com.riviewz.util.JwtUtils;

@RestController
@RequestMapping("/reviews")
public class DeleteReviewsController {
	
	@Autowired
	private JwtUtils jwtUtils;

	@Autowired
	ReviewsService reviewService;

	@Autowired
	HistoryService historyService;
	
//	@Autowired
//	UserProxy userProxy;

	@CrossOrigin
	@PostMapping("/delete")
	public String deleteReview(@RequestParam(value="category") String category, @RequestParam(value="entity_id") String entityFk, @RequestParam(value="entity_name") String entityName, @RequestParam(value="j") String jwt) throws Exception {
		
		String reviewObj = "noFeedback";
		
		Map<String, Object> userData = jwtUtils.verifyJwtAndGetData(jwt);
				
		int userId = (int) userData.get("userId");
		
		User rev = reviewService.deleteReview(category, entityName, entityFk, userId);
		
		Gson gson = new Gson();
		reviewObj = gson.toJson(rev);
		
		return reviewObj;

	}
	
	@CrossOrigin
	@PostMapping("/deleteAll")
	public int deleteAccount(@RequestParam(value="j") String jwt) throws Exception {
		
		Map<String, Object> userData = jwtUtils.verifyJwtAndGetData(jwt);
		
		int id = (int) userData.get("userId");
		
		List<User> reviewList = (List<User>) historyService.getHistory(id);
		
		for(User rev : reviewList) {
			reviewService.deleteReview(rev.getIndexCatg(), rev.getEntityName(), String.valueOf(rev.getEntityFk()), id);
		}
		
		return 1;
	}	

}