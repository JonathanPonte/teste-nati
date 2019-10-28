package com.davivasconcelos.teste.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.davivasconcelos.teste.domain.Semestre;

@Repository
public interface SemestreRepository extends JpaRepository<Semestre, Integer> {


}
