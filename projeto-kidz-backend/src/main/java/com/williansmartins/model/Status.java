package com.williansmartins.model;

public enum Status {
	
	SUCESSO("Sucesso"),
	ERRO("Sucesso");
	
	private String descricao;
	
	Status(String descricao){
		this.descricao = descricao;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
}