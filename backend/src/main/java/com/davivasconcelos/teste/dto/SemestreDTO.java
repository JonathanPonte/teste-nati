package com.davivasconcelos.teste.dto;

import java.io.Serializable;

public class SemestreDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private Integer ordem;
	private Integer curso_id;
	
	public SemestreDTO() {
	}
	
	public SemestreDTO(Integer order, Integer curso_id) {
		super();
		this.ordem = order;
		this.curso_id = curso_id;
	}

	public Integer getOrdem() {
		return ordem;
	}

	public void setOrdem(Integer ordem) {
		this.ordem = ordem;
	}

	public Integer getCurso_id() {
		return curso_id;
	}

	public void setCurso_id(Integer curso_id) {
		this.curso_id = curso_id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	
	
}
