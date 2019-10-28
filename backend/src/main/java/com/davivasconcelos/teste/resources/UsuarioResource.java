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

import com.davivasconcelos.teste.domain.Usuario;
import com.davivasconcelos.teste.dto.UserLoginDTO;
import com.davivasconcelos.teste.services.UsuarioService;

@RestController
@RequestMapping(value="/usuarios")
public class UsuarioResource {
	
	@Autowired
	private UsuarioService service;
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<List<Usuario>> listAll() {
		List<Usuario> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<Usuario> insert(@RequestBody Usuario u) {
		u = service.insert(u);
		return ResponseEntity.status(HttpStatus.CREATED).body(u);
	}
	
	@CrossOrigin
	@RequestMapping(value="{id}", method=RequestMethod.PUT)
	public ResponseEntity<Void> update(@RequestBody Usuario usuario, @PathVariable Integer id) {
		usuario.setId(id);
		usuario = service.update(usuario);
		return ResponseEntity.noContent().build();
	}
	
	@CrossOrigin
	@RequestMapping(value="{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Integer id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
	
	@CrossOrigin
	@RequestMapping(value="login", method=RequestMethod.POST)
	public ResponseEntity<Usuario> login(@RequestBody UserLoginDTO usuarioDTO) {
		System.out.println(usuarioDTO.getEmail());
		Usuario usuario = service.findByEmail(usuarioDTO.getEmail());
		return ResponseEntity.ok().body(usuario);
	}
	
	
	
	
	

}
