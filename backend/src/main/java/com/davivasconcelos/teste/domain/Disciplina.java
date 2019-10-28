package com.davivasconcelos.teste.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Disciplina implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	private String nome;
	private Integer credito;
	
	
	public Disciplina() {
	}
	
	public Disciplina(Integer id, String nome, Integer credito) {
		super();
		this.id = id;
		this.nome = nome;
		this.credito = credito;
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

	public Integer getCredito() {
		return credito;
	}

	public void setCredito(Integer credito) {
		this.credito = credito;
	}
	
}
