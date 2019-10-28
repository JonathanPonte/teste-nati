package com.davivasconcelos.teste.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.davivasconcelos.teste.domain.enums.TipoUsuario;

@Entity
public class Usuario implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String nome;
	private Integer tipo;
	
	@Column(unique=true)
	private String email;
	
	
	public Usuario(Integer id, String nome, String email, TipoUsuario tipo) {
		super();
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.tipo = ( tipo == null ? null : tipo.getCod() );
	}
	
	public Usuario() {
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public TipoUsuario getTipo() {
		return TipoUsuario.toEnum(tipo);
	}
	public void setTipo(TipoUsuario tipo) {
		this.tipo = tipo.getCod();
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
}
