package com.davivasconcelos.teste.domain.enums;

public enum TipoUsuario {
	ALUNO(1, "Aluno"),
	PROFESSOR(2, "Professor"),
	COORDENADOR(3, "Coordenador"),
	ADMINISTRADOR(4, "Administrador");
	
	private Integer cod;
	private String descricao;
	
	private TipoUsuario(Integer cod, String descricao) {
		this.cod = cod;
		this.descricao = descricao;
	}
	
	public Integer getCod() {
		return cod;
	}

	public String getDescrica() {
		return descricao;
	}
	
	public static TipoUsuario toEnum(Integer cod) {
		if(cod == null)
			return null;
		
		for(TipoUsuario x : TipoUsuario.values()) {
			if(cod.equals(x.getCod())) {
				return x;
			}
		}
		
		throw new IllegalArgumentException("Codigo inválido: " + cod);
	}
	

}
