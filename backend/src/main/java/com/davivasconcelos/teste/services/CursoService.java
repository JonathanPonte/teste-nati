package com.davivasconcelos.teste.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.davivasconcelos.teste.domain.Curso;
import com.davivasconcelos.teste.domain.Semestre;
import com.davivasconcelos.teste.dto.CursoUpdateDTO;
import com.davivasconcelos.teste.dto.NovoCursoDTO;
import com.davivasconcelos.teste.repositories.CursoRepository;
import com.davivasconcelos.teste.repositories.SemestreRepository;

@Service
public class CursoService {
	
	@Autowired
	private CursoRepository repository;
	@Autowired
	private SemestreRepository semestreRepository;
	
	public Curso find(Integer id) {
		Curso curso = repository.findById(id).orElse(null);
		if(curso == null) {
			throw new IllegalArgumentException("Não foi possivel encontrar o recurso.");
		}
		
		return curso;
	}
	
	public Curso insert(Curso c) {
		c.setId(null);
		c = repository.save(c);
		return c;
	}
	
	public Curso insert(NovoCursoDTO c) {
		Curso curso = fromDTO(c);
		curso = insert(curso);
		return curso;
	}
	
	public List<Curso> findAll() {
		List<Curso> list = new ArrayList<>();
		for(Curso c : repository.findAll()) {
			list.add(c);
		}
		return list;
	}
	
	public Curso update(Curso c) {
		Curso curso = find(c.getId());
		curso = updateData(curso, c);
		return repository.save(curso);
	}
	
	public Curso update(CursoUpdateDTO c) {
		Curso curso = find(c.getId());
		Curso curso_new = fromDTO(c);
		curso = updateData(curso, curso_new);
		return repository.save(curso);
	}

	private Curso updateData(Curso curso, Curso atualizado) {
		curso.setNome( atualizado.getNome() == null ? curso.getNome() : atualizado.getNome() );
		curso.setTurno( (int)atualizado.getTurno() == 0 ? curso.getTurno() : atualizado.getTurno() );
		return curso;
	}
	
	public void delete(Integer id) {
		repository.deleteById(id);
	}
	
	public Curso addSemestre(Curso c, int qtde) {
		for(int i = 0; i < qtde; i++) {
			Semestre s = new Semestre(i+1, c, null);
			c.addSemestre(s);
			semestreRepository.save(s);
		}
		repository.save(c);
		return c;
	}
	
	public Curso fromDTO(NovoCursoDTO c) {
		Curso curso = new Curso();
		curso.setNome(c.getNome());
		curso.setTurno(c.getTurno());
		return curso;
	}
	
	public Curso fromDTO(CursoUpdateDTO c) {
		Curso curso = new Curso();
		curso.setNome(c.getNome());
		curso.setTurno(c.getTurno());
		return curso;
	}

	
}
