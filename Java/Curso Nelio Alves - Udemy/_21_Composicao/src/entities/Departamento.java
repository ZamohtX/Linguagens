package entities;

public class Departamento {
	private String nome;
	
	public Departamento() {
		
	}
	public Departamento(String nome) {
		this.nome = nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getNome() {
		return this.nome;
	}
}
