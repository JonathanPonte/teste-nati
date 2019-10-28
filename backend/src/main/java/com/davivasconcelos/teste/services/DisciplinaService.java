package com.davivasconcelos.teste.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.davivasconcelos.teste.domain.Disciplina;
import com.davivasconcelos.teste.repositories.DisciplinaRepository;

@Service
public class DisciplinaService {
	
	@Autowired
	private DisciplinaRepository repository;
	
	public Disciplina find(Integer id) {
		Disciplina disciplina = repository.findById(id).orElse(null);
		if(disciplina == null) {
			throw new IllegalArgumentException("Não foi possivel encontrar a disciplina.");
		}
		
		return disciplina;
	}
	
	public Disciplina insert(Disciplina d) {
		d.setId(null);
		d = repository.save(d);
		return d;
	}
	
	public List<Disciplina> findAll() {
		List<Disciplina> list = new ArrayList<>();
		for(Disciplina d : repository.findAll()) {
			list.add(d);
		}
		return list;
	}
	
	public Disciplina update(Disciplina d) {
		Disciplina disciplina = find(d.getId());
		disciplina = updateData(disciplina, d);
		return repository.save(disciplina);
	}

	private Disciplina updateData(Disciplina disciplina, Disciplina atualizado) {
		disciplina.setNome( atualizado.getNome() == null ? disciplina.getNome() : atualizado.getNome() );
		disciplina.setCredito( atualizado.getCredito() == null ? disciplina.getCredito() : atualizado.getCredito() );

		return disciplina;
	}
	
	public void delete(Integer id) {
		repository.deleteById(id);
	}
	
}
