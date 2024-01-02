package com.amine.choretracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.amine.choretracker.models.Job;
import com.amine.choretracker.models.User;
import com.amine.choretracker.services.JobService;
import com.amine.choretracker.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class TrackerController {

	@Autowired
	private UserService userServ;

	@Autowired
	JobService jobService;

	@GetMapping("/dashboard")
	public String home(Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}

		User user = userServ.findById(userId);
		List<Job> jobsUserNotIn = jobService.jobsUserNotIn(user);
		List<Job> jobsUserIn = jobService.jobsUserIn(user);
		model.addAttribute("jobsUserNotIn", jobsUserNotIn);
		model.addAttribute("jobsUserIn", jobsUserIn);
		model.addAttribute("user", user);
		return "dashboard.jsp";
	}

	// Create New Job
	@GetMapping("/jobs/new")
	public String newJob(@ModelAttribute("job") Job job, Model model, HttpSession session) {

		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}

		User user = userServ.findById(userId);
		model.addAttribute("user", user);

		return "new_job.jsp";
	}

	@PostMapping("/new/job")
	public String createJob(@Valid @ModelAttribute("job") Job job, BindingResult result, Model model,
			HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}

		User user = userServ.findById(userId);
		model.addAttribute("user", user);
		if (result.hasErrors()) {
			return "new_job.jsp";
		} else {
			jobService.createJob(job);
			return "redirect:/dashboard";
		}
	}

	// Show one
	@GetMapping("/jobs/{jobId}")
	public String oneJob(Model model, @PathVariable("jobId") Long jobId, HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}

		User user = userServ.findById(userId);
		model.addAttribute("user", user);

		Job job = jobService.findJob(jobId);
		model.addAttribute("job", job);

		return "show_job.jsp";
	}

	// Edit Job

	@RequestMapping("/jobs/edit/{id}")
	public String edit(@PathVariable("id") Long id, Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}

		User user = userServ.findById(userId);
		model.addAttribute("user", user);

		Job job = jobService.findJob(id);
		if (job != null) {

			model.addAttribute("job", job);
			return "edit_job.jsp";
		}

		else
			return "redirect:/dashboard";
	}

	@PostMapping(value = "/jobs/{id}/edit")
	public String updateJob(@Valid @ModelAttribute("job") Job job, @PathVariable("id") Long id, BindingResult result, HttpSession session) {

		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}

		if (result.hasErrors()) {
			return "edit_job.jsp";
		} else {

			User user = userServ.findById(userId);
			Job thisJob = jobService.findJob(id);

			job.setUsers(thisJob.getUsers());
			job.setLead(user);
			jobService.updateJob(job);
			return "redirect:/dashboard";
		}
	}

	@RequestMapping("/delete/{jobId}")
	public String deleteJob(@PathVariable("jobId") Long jobId, HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		jobService.deleteJob(jobId);
		return "redirect:/dashboard";
	}

	@RequestMapping(value = "/jobs/join/{jobId}/{userId}")
	public String joinJob(@PathVariable("jobId") Long jobId, @PathVariable("userId") Long userId) {
		Job job = jobService.findJob(jobId);
		User user = userServ.findById(userId);
		job.getUsers().add(user);
		jobService.updateJob(job);
		return "redirect:/dashboard";

	}
}