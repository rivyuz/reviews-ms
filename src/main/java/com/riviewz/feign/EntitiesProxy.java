package com.riviewz.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="zuul-ms", url="${feign.zuul.url}")
public interface EntitiesProxy {

	@GetMapping("/entities-ms/counter/{category}/{id}")
	public void updateCounter(@PathVariable("category") String indexCatg, @PathVariable("id") int entityFk);

	@GetMapping("/entities-ms/counter/decrement/{category}/{id}")
	public void decrementCounter(@PathVariable("category") String indexCatg, @PathVariable("id") int entityFk);
	
}