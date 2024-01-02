package com.amine.choretracker.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.amine.choretracker.models.Job;
import com.amine.choretracker.models.User;
import com.amine.choretracker.repositories.JobRepository;

@Service

public class JobService {

	// adding the Job repository as a dependency
	private final JobRepository jobRepository;

	public JobService(JobRepository jobRepository) {
		this.jobRepository = jobRepository;
	}

	// returns all the jobs
	public List<Job> allJobs() {
		return jobRepository.findAll();
	}

	public List<Job> jobsUserIn(User user) {
		return jobRepository.findByUsersContains(user);
	}

	public List<Job> jobsUserNotIn(User user) {
		return jobRepository.findByUsersNotContains(user);
	}

	public List<Job> findJobsWhereUserNotMemberOf(User user) {
		// Fetch all jobs from the repository
		List<Job> allJobs = jobRepository.findAll();

		// Filter jobs where the user is not a member
		List<Job> filteredJobs = allJobs.stream().filter(job -> !job.getUsers().contains(user))
				.collect(Collectors.toList());

		return filteredJobs;
	}

	// creates a job
	public Job createJob(Job p) {
		return jobRepository.save(p);
	}

	// retrieves a job
	public Job findJob(Long id) {
		Optional<Job> optionalJob = jobRepository.findById(id);
		if (optionalJob.isPresent()) {
			return optionalJob.get();
		} else {
			return null;
		}
	}

	public Job updateJob(Job job) {

		return jobRepository.save(job);
	}

	// to delete a job, we simply pass in the job ID and if our repository
	// finds
	// it, the job will be deleted
	public void deleteJob(Long id) {
		Optional<Job> optionalJob = jobRepository.findById(id);
		if (optionalJob.isPresent()) {
			jobRepository.deleteById(id);
		}
	}

}
