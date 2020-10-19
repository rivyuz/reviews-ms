package com.riviewz.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.riviewz.model.User;

@FeignClient(name="zuul-ms", url="${feign.zuul.url}")
public interface UserProxy {
	@GetMapping("/users-ms/user/{id}")
	public User getUserById(@PathVariable("id") String id);
}