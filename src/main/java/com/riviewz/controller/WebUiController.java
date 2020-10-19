package com.riviewz.controller;

import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.riviewz.util.AesUtil;

@Controller
public class WebUiController {
	
	@CrossOrigin
	@GetMapping("/")
	public String index() throws UnsupportedEncodingException {		
		return "index";
	}	
	
	@CrossOrigin
	@GetMapping("/home")
	public String home(@RequestParam(value="j") String jwt, HttpServletResponse response) throws UnsupportedEncodingException {
		
		
		AesUtil aesUtil = new AesUtil();
		String j = aesUtil.decrypt(jwt);		
		
		response.setHeader("j", j);
		
		
		return "index";
	}	

} //class ends