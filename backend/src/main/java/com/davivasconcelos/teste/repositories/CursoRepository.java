package com.davivasconcelos.teste.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.davivasconcelos.teste.domain.Curso;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Integer> {


}
