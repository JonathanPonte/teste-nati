package com.davivasconcelos.teste.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.davivasconcelos.teste.domain.Curso;
import com.davivasconcelos.teste.domain.Disciplina;
import com.davivasconcelos.teste.domain.Semestre;
import com.davivasconcelos.teste.dto.SemestreDTO;
import com.davivasconcelos.teste.dto.SemestreHasDiscilpinaDTO;
import com.davivasconcelos.teste.services.SemestreService;

@RestController
@RequestMapping(value="/semestres")
public class SemestreResource {
	
	@Autowired
	private SemestreService service;
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<Semestre> insert(@RequestBody SemestreDTO s) {
		Semestre semestre = service.insert(s);
		return ResponseEntity.status(HttpStatus.CREATED).body(semestre);
	}
	
	@CrossOrigin
	@RequestMapping(value="{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Integer id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
	
	
	// SemestreHasDisciplinas Controller
	@CrossOrigin
	@RequestMapping(value="{id}/disciplinas", method=RequestMethod.GET)
	public ResponseEntity<List<Disciplina>> listDisciplinas(@PathVariable Integer id) {
		Semestre semestre = service.find(id);
		return ResponseEntity.ok().body(semestre.getDisciplinas());
	}
	
	@CrossOrigin
	@RequestMapping(value="{id}/disciplinas", method=RequestMethod.POST)
	public ResponseEntity<Semestre> insertDisciplina(@PathVariable Integer id, @RequestBody SemestreHasDiscilpinaDTO semestreHasDiscilpina) {
		Semestre semestre = service.addDisciplina(id, semestreHasDiscilpina.getDisciplina_id());
		
		return ResponseEntity.ok().body(semestre);
	}
	
	@CrossOrigin
	@RequestMapping(value="{id_semestre}/disciplinas/{id_disciplina}", method=RequestMethod.DELETE)
	public ResponseEntity<Semestre> removeDisciplina(@PathVariable Integer id_semestre, @PathVariable Integer id_disciplina) {
		Semestre semestre = service.removeDisciplina(id_semestre, id_disciplina);
		return ResponseEntity.ok().body(semestre);
	}
	
	
	

}
