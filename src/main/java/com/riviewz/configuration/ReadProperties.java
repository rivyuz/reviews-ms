package com.riviewz.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("reviews-ms")
public class ReadProperties {
	
	private String zuulUrl;

	public String getZuulUrl() {
		return zuulUrl;
	}

	public void setZuulUrl(String zuulUrl) {
		this.zuulUrl = zuulUrl;
	}
	
}