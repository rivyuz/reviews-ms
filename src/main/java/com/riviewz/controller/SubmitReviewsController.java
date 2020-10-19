package com.riviewz.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.riviewz.feign.UserProxy;
import com.riviewz.model.User;
import com.riviewz.service.ReviewsService;
import com.riviewz.util.JsonResponseBody;
import com.riviewz.util.JwtUtils;

@RestController
@RequestMapping("/reviews")
public class SubmitReviewsController {
	
	@Autowired
	private JwtUtils jwtUtils;

	@Autowired
	ReviewsService reviewService;
	
	@Autowired
	UserProxy userProxy;

	@CrossOrigin
	@PostMapping("/submit")
	public ResponseEntity<JsonResponseBody> submitReview(@RequestParam(value="category") String category, @RequestParam(value="entity_id") String entityFk, @RequestParam(value="entity_name") String entityName, @RequestParam(value="j") String jwt,
							   @RequestParam String parameter_1, @RequestParam String parameter_2, @RequestParam String parameter_3, @RequestParam String parameter_4,
							   @RequestParam String parameter_5, @RequestParam String parameter_6, @RequestParam String parameter_7, @RequestParam String parameter_8,
							   @RequestParam String rating_1, @RequestParam String rating_2, @RequestParam String rating_3, @RequestParam String rating_4,
							   @RequestParam String rating_5, @RequestParam String rating_6, @RequestParam String rating_7, @RequestParam String rating_8,
							   @RequestParam String comment ) throws Exception {
		
		String reviewObj = "noFeedback";
		
		Map<String, Object> userData = jwtUtils.verifyJwtAndGetData(jwt);
				
		int userId = (int) userData.get("userId");
		
		User user = userProxy.getUserById(String.valueOf(userId));
		
		if(user.getStatus() != 0) {
			User rev = reviewService.saveReview(category, entityName, entityFk, userId,
				      parameter_1, parameter_2, parameter_3, parameter_4, parameter_5, parameter_6, parameter_7, parameter_8,
				      rating_1, rating_2, rating_3, rating_4,	rating_5, rating_6, rating_7, rating_8,
				      comment);
			Gson gson = new Gson();
			reviewObj = gson.toJson(rev);			
		}
		else {
			reviewObj = "please activate";
		}

		return ResponseEntity.status(HttpStatus.OK).header("Access-Control-Allow-Credentials","true").header("Access-Control-Expose-Headers", "j").header("j", jwt).body(new JsonResponseBody(HttpStatus.OK.value(), reviewObj));

	}

}