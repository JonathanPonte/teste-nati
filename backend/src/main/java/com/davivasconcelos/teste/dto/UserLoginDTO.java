package com.davivasconcelos.teste.dto;

import java.io.Serializable;

public class UserLoginDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String email;
	
	public UserLoginDTO(String email) {
		this.email = email;
	}
	
	public UserLoginDTO() {}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
	

}
