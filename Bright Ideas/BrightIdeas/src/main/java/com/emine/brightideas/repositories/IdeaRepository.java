package com.emine.brightideas.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.emine.brightideas.models.Idea;

@Repository
public interface IdeaRepository extends CrudRepository<Idea, Long> {

	List<Idea> findAll();
}
