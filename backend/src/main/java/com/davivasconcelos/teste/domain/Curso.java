package com.davivasconcelos.teste.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Curso implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String nome;
	private char turno;
	
	@OneToMany(mappedBy="curso", cascade=CascadeType.REMOVE)
	private List<Semestre> semestres = new ArrayList<>();
	
	
	public Curso() {
	}
	
	public Curso(Integer id, String nome, char turno) {
		super();
		this.id = id;
		this.nome = nome;
		this.turno = turno;
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
	public char getTurno() {
		return turno;
	}
	public void setTurno(char turno) {
		this.turno = turno;
	}
	public List<Semestre> getSemestres() {
		return semestres;
	}
	public void setSemestres(List<Semestre> semestres) {
		this.semestres = semestres;
	}
	
	public void addSemestre(Semestre semestre) {
		this.semestres.add(semestre);
	}
	
	
}
