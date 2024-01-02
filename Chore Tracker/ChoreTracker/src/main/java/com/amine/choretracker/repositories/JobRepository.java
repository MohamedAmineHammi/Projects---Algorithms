package com.amine.choretracker.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.amine.choretracker.models.Job;
import com.amine.choretracker.models.User;

@Repository
public interface JobRepository extends CrudRepository<Job, Long> {
	List<Job> findAll();

	List<Job> findByUsersNotContains(User user);

	List<Job> findByUsersContains(User user);
}
