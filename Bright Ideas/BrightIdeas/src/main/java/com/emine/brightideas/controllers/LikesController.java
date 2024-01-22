package com.emine.brightideas.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.emine.brightideas.models.Idea;
import com.emine.brightideas.models.User;
import com.emine.brightideas.services.IdeaService;
import com.emine.brightideas.services.UserService;

@Controller
public class LikesController {

	// inject our services using @Autowired annotation
	@Autowired
	private  IdeaService ideaService;
	@Autowired
	private  UserService userService;
	
	// create like
	@GetMapping("/likes/{id}")
	public String like(@PathVariable("id")Long id,Model model,HttpSession session) {
		Long userId=(Long)session.getAttribute("userId");	
		User user=userService.findUserById(userId);
		Idea idea=ideaService.oneIdea(id);
		idea.getFollowers().add(user);
		ideaService.update(idea);
		return "redirect:/bright_ideas";
	}
	
	
	
}
