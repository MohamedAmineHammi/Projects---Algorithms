package com.amine.choretracker.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.amine.choretracker.models.User;
import com.amine.choretracker.models.UserLogin;
import com.amine.choretracker.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping("/")
	public String sign_in(@ModelAttribute("loginUser") UserLogin userLogin) {
		return "sign-in.jsp";
	}

	@PostMapping("/process/login")
	public String processLogin(@Valid @ModelAttribute("loginUser") UserLogin userLogin, BindingResult result,
			HttpSession session, Model model) {
		User user = userService.login(userLogin, result);

		if (result.hasErrors()) {
			return "sign-in.jsp";
		} else {
			model.addAttribute("user", user);
			session.setAttribute("user_id", user.getId());
			return "redirect:/dashboard";
		}
	}

	@GetMapping("/signup")
	public String signup(Model model) {
		model.addAttribute("user", new User());
		return "sign-up.jsp";
	}

	@PostMapping("/create/user")
	public String createUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session,
			Model model) {
		userService.register(user, result);
		if (result.hasErrors()) {
			return "sign-up.jsp";
		} else {
			session.setAttribute("user_id", user.getId());
			return "redirect:/";
		}
	}

	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/";
	}
}
