package com.riviewz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.riviewz.configuration.ReadProperties;

@RestController
@RequestMapping("/urls")
public class PropertiesController {
	
	@Autowired
	private ReadProperties properties;

	@CrossOrigin
	@GetMapping("/get")	
	public String handlerMethod() {
		
		String urls = "default-message";
		
		Gson gson = new Gson();
		
		urls = gson.toJson(properties); // list --> json
		urls = urls.substring(0, urls.length());
		urls = "[" + urls + "]";		
		
		return urls;
	} //handlerMethod ends

} //PropertiesController ends