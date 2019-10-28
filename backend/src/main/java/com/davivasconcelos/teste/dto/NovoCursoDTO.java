package com.davivasconcelos.teste.dto;

import java.io.Serializable;

public class NovoCursoDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String nome;
	private Integer semestres;
	private char turno;
	
	public NovoCursoDTO() { }
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Integer getSemestres() {
		return semestres;
	}
	public void setSemestres(Integer semestres) {
		this.semestres = semestres;
	}
	public char getTurno() {
		return turno;
	}
	public void setTurno(char turno) {
		this.turno = turno;
	}
	
	
	

}
