package com.riviewz.controller;

import java.io.UnsupportedEncodingException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.riviewz.feign.UserProxy;
import com.riviewz.model.RatingParameter;
import com.riviewz.model.User;
import com.riviewz.service.ReviewsService;
import com.riviewz.util.Util;

@Controller
public class ReviewByEntityController {
	
	@Autowired
	ReviewsService reviewService;
	
	@Autowired
	UserProxy userProxy;	

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@CrossOrigin
	@PostMapping("/reviews")
	public ModelAndView getReviewsByEntity(@RequestParam(value="j") String jwt, @RequestParam(value="category") String category, @RequestParam(value="entity_id") String entityFk, @RequestParam(value="entity_name") String entityName, HttpSession session) throws UnsupportedEncodingException {
		
		System.out.println("jwt = " + jwt);
		
		int userFk = 0;
		
		Map reviewMap = new HashMap();
		
		reviewMap.put("j", jwt);
		
		String imageName = entityName;
		imageName = imageName.replaceAll("\\s+","");
		imageName = imageName.replaceAll("\\/","");
		imageName = imageName.replaceAll("\\.","");
		imageName = imageName.replaceAll("\\*","");
		
		RatingParameter parameterList =  reviewService.getParameters(category);
		
		if(null != parameterList) {
			parameterList.setIndexCatg(category);
			parameterList.setEntityId(entityFk);
			parameterList.setEntityName(entityName);
			parameterList.setImageName(imageName);
			
			reviewMap.put("parameterList", parameterList);
			
			List<User> revList =  reviewService.getReviewsByEntity(category, entityFk);
			
			float rp_1 = 0;
			float rp_2 = 0;
			float rp_3 = 0;
			float rp_4 = 0;
			float rp_5 = 0;
			float rp_6 = 0;
			float rp_7 = 0;
			float rp_8 = 0;
			
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
				    
					Timestamp ts = revList.get(i).getDate();
					SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MMM-yyyy");
					simpleDateFormat.format(ts);
					revList.get(i).setDateStr(simpleDateFormat.format(ts));			    
								
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
			}		
			
			reviewMap.put("revList", revList);			
		}
		
		return new ModelAndView("input", "reviewMap", reviewMap);		
	}

}