package com.davivasconcelos.teste.dto;

import java.io.Serializable;

public class SemestreHasDiscilpinaDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Integer disciplina_id;
	
	public SemestreHasDiscilpinaDTO() {}

	public Integer getDisciplina_id() {
		return disciplina_id;
	}

	public void setDisciplina_id(Integer disciplina_id) {
		this.disciplina_id = disciplina_id;
	}
	
	

}
