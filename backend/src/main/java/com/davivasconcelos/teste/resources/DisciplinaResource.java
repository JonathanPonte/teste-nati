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

import com.davivasconcelos.teste.domain.Disciplina;
import com.davivasconcelos.teste.services.DisciplinaService;

@RestController
@RequestMapping(value="/disciplinas")
public class DisciplinaResource {
	
	@Autowired
	private DisciplinaService service;
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<List<Disciplina>> listAll() {
		List<Disciplina> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<Disciplina> insert(@RequestBody Disciplina d) {
		d = service.insert(d);
		return ResponseEntity.status(HttpStatus.CREATED).body(d);
	}
	
	@CrossOrigin
	@RequestMapping(value="{id}", method=RequestMethod.PUT)
	public ResponseEntity<Void> update(@RequestBody Disciplina disciplina, @PathVariable Integer id) {
		disciplina.setId(id);
		disciplina = service.update(disciplina);
		return ResponseEntity.noContent().build();
	}
	
	@CrossOrigin
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Integer id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
	
	

}
