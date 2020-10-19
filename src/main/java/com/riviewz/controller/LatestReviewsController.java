package com.riviewz.controller;

import java.io.UnsupportedEncodingException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.riviewz.feign.UserProxy;
import com.riviewz.model.User;
import com.riviewz.service.ReviewsService;

@RestController
@RequestMapping("/reviews")
public class LatestReviewsController {
	
	@Autowired
	ReviewsService reviewService;
	
	@Autowired
	UserProxy userProxy;

	@CrossOrigin
	@GetMapping("/latest")
	public List<User> getLatestReviews() throws UnsupportedEncodingException {
		
		List<User> revList = reviewService.getLatestReviews();
		
		int userFk = 0;
		
		for(int i=0; i < revList.size(); i++) {
			
			Timestamp ts = revList.get(i).getDate();
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MMM-yyyy");
			simpleDateFormat.format(ts);
			revList.get(i).setDateStr(simpleDateFormat.format(ts));
			
			userFk = revList.get(i).getUserFk();
			String id = String.valueOf(userFk);
			User response = userProxy.getUserById(id);
			
			byte[] encodeBase64;
		    String base64Encoded;
		    
			if(null != response.getPic()) {
				encodeBase64 = Base64.getEncoder().encode(response.getPic());
			    base64Encoded = new String(encodeBase64, "UTF-8");
			    response.setUserImage(base64Encoded);
			    revList.get(i).setUserImage(response.getUserImage());
			} else {
				revList.get(i).setUserImage(null);					
			}		

			revList.get(i).setUserName(response.getUserName());
			revList.get(i).setType(response.getType());
			revList.get(i).setPhotoUploaded(response.getPhotoUploaded());			
		
		}
		
		return revList;
		
	}

}