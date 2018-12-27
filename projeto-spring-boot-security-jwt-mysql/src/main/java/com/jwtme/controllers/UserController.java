package com.jwtme.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	@RequestMapping("/users")
	@ResponseBody
	public String getUsers() {
		return "{\"users\":[{\"name\":\"Lucas\", \"country\":\"Brazil\"}," +
		           "{\"name\":\"Jackie\",\"country\":\"China\"}]}";
	}
	
	@RequestMapping("/restrito")
	@ResponseBody
	public String getRestrito() {
		return "restrito";
	}
	
	@RequestMapping("/aberto")
	@ResponseBody
	public String aberto() {
		return "aberto";
	}
}