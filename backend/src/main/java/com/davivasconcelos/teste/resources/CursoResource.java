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
import com.davivasconcelos.teste.dto.CursoUpdateDTO;
import com.davivasconcelos.teste.dto.NovoCursoDTO;
import com.davivasconcelos.teste.services.CursoService;

@RestController
@RequestMapping(value="/cursos")
public class CursoResource {
	
	@Autowired
	private CursoService service;
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<List<Curso>> listAll() {
		List<Curso> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@CrossOrigin
	@RequestMapping(value="{id}", method=RequestMethod.GET)
	public ResponseEntity<Curso> show(@PathVariable Integer id) {
		Curso curso = service.find(id);
		return ResponseEntity.ok().body(curso);
	}
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<Curso> insert(@RequestBody NovoCursoDTO c) {
		Curso curso = service.insert(c);
		curso = service.addSemestre(curso, c.getSemestres());
		return ResponseEntity.status(HttpStatus.CREATED).body(curso);
	}
	
	@CrossOrigin
	@RequestMapping(value="{id}", method=RequestMethod.PUT)
	public ResponseEntity<Void> update(@RequestBody CursoUpdateDTO curso, @PathVariable Integer id) {
		curso.setId(id);
		service.update(curso);
		return ResponseEntity.noContent().build();
	}
	
	@CrossOrigin
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Integer id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
	
	

}
