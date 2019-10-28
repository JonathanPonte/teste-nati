package com.davivasconcelos.teste.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.davivasconcelos.teste.domain.Curso;
import com.davivasconcelos.teste.domain.Disciplina;
import com.davivasconcelos.teste.domain.Semestre;
import com.davivasconcelos.teste.dto.SemestreDTO;
import com.davivasconcelos.teste.repositories.CursoRepository;
import com.davivasconcelos.teste.repositories.DisciplinaRepository;
import com.davivasconcelos.teste.repositories.SemestreRepository;

@Service
public class SemestreService {
	
	@Autowired
	private SemestreRepository repository;
	
	@Autowired
	private CursoRepository cursoRepository;
	
	@Autowired
	private DisciplinaRepository disciplinaRepository;
	
	public Semestre find(Integer id) {
		Semestre semestre = repository.findById(id).orElse(null);
		if(semestre == null) {
			throw new IllegalArgumentException("Não foi possivel encontrar o recurso.");
		}
		
		return semestre;
	}
	
	public Semestre insert(SemestreDTO s) {
		s.setId(null);
		Semestre semestre = this.fromDTO(s);
		semestre = repository.save(semestre);
		return semestre;
	}
	
	public Semestre fromDTO(SemestreDTO semestreDTO) {
		Semestre s = new Semestre();
		Curso c = cursoRepository.findById(semestreDTO.getCurso_id()).orElse(null);
		s.setCurso(c);
		s.setOrdem(semestreDTO.getOrdem());
		s.setId(semestreDTO.getId());
		
		return s;
	}
	
	public void delete(Integer id) {
		repository.deleteById(id);
	}
	
	public Semestre addDisciplina(Integer semestre_id, Integer disciplina_id) {
		Semestre semestre = find(semestre_id);
		Disciplina disciplina = disciplinaRepository.findById(disciplina_id).orElse(null);
		semestre.addDisciplina(disciplina);
		return repository.save(semestre);
	}
	
	public Semestre removeDisciplina(Integer semestre_id, Integer disciplina_id) {
		Semestre semestre = find(semestre_id);
		Disciplina disciplina = disciplinaRepository.findById(disciplina_id).orElse(null);
		semestre.removeDisciplina(disciplina);
		return repository.save(semestre);
	}

}
