package com.davivasconcelos.teste.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.davivasconcelos.teste.domain.Usuario;
import com.davivasconcelos.teste.repositories.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository repository;
	
	public List<Usuario> findAll() {
		List<Usuario> list = new ArrayList<>();
		for(Usuario u : repository.findAll()) {
			list.add(u);
		}
		return list;
	}
	
	public Usuario find(Integer id) {
		Usuario usuario = repository.findById(id).orElse(null);
		if(usuario == null) {
			throw new IllegalArgumentException("Não foi possivel encontrar o recurso.");
		}
		
		return usuario;
	}
	
	public Usuario findByEmail(String email) {
		Usuario usuario = repository.findByEmail(email);
		return usuario;	
	}
	
	public Usuario insert(Usuario u) {
		u.setId(null);
		u = repository.save(u);
		return u;
	}
	
	public Usuario update(Usuario u) {
		Usuario usuario = find(u.getId());
		usuario = updateData(usuario, u);
		return repository.save(usuario);
	}
	
	private Usuario updateData(Usuario usuario, Usuario atualizado) {
		usuario.setEmail(atualizado.getEmail() == null ? usuario.getEmail() : atualizado.getEmail());
		usuario.setNome(atualizado.getNome() == null ? usuario.getNome() : atualizado.getNome());
		usuario.setTipo(atualizado.getTipo() == null ? usuario.getTipo() : atualizado.getTipo());
		
		return usuario;
	}
	
	public void delete(Integer id) {
		repository.deleteById(id);
	}

}
