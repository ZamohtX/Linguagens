package exercicio17;

public class Empregado {
	private Integer id;
	private String nome;
	private Double salario;

	
	public Empregado(Integer id, String nome, Double salario) {
		this.id = id;
		this.nome = nome;
		this.salario = salario;
	}
	
	public Integer getId() {
		return this.id;
	}
	public String getNome() {
		return this.nome;
	}
	public Double getSalario() {
		return this.salario;
	}
	public void setSalario(Double salario) {
		this.salario = salario;
	}
	
	
	
	

}
