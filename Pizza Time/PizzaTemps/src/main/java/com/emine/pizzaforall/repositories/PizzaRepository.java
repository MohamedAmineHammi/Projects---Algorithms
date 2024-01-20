package com.emine.pizzaforall.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.emine.pizzaforall.models.Pizza;

@Repository
public interface PizzaRepository extends CrudRepository<Pizza, Long> {
	List<Pizza> findAll();
	
}
