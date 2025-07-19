package exercicio15;

public class Aluno {
	
	private String nome;
	private double notaA;
	private double notaB;
	private double media;
	
	
	public Aluno(String nome, double notaA, double notaB) {
		this.nome = nome;
		this.notaA = notaA;
		this.notaB = notaB;
		this.media = (notaA + notaB) / 2;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getNome() {
		return this.nome;
	}
	public double getMedia() {
		return this.media;
	}

}
