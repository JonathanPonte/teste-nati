package com.davivasconcelos.teste.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Semestre implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private Integer ordem;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="curso_id")
	private Curso curso;
	
	@ManyToMany
	@JoinTable(name="semestre_has_disciplinas", 
		joinColumns= { @JoinColumn(name="semestre_id") },
		inverseJoinColumns= { @JoinColumn(name="disciplina_id") })
	private List<Disciplina> disciplinas = new ArrayList<>();
	
	public Semestre() {
	}

	public Semestre(Integer ordem, Curso curso, List<Disciplina> disciplinas) {
		super();
		this.ordem = ordem;
		this.curso = curso;
		this.disciplinas = disciplinas;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getOrdem() {
		return ordem;
	}

	public void setOrdem(Integer ordem) {
		this.ordem = ordem;
	}

	public Curso getCurso() {
		return curso;
	}

	public void setCurso(Curso curso) {
		this.curso = curso;
	}

	public List<Disciplina> getDisciplinas() {
		return disciplinas;
	}

	public void setDisciplinas(List<Disciplina> disciplinas) {
		this.disciplinas = disciplinas;
	}
	
	public void addDisciplina(Disciplina disciplina) {
		this.disciplinas.add(disciplina);
	}
	
	public void removeDisciplina(Disciplina disciplina) {
		this.disciplinas.remove(disciplina);
	}
	
	
	

}
