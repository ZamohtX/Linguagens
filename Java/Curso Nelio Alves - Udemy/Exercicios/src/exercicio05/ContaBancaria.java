package exercicio05;

public class ContaBancaria {
	
	private String titular;
	private int conta;
	private double saldo;
	
	
	
	// Getters e Setters
	public void setTitular(String nome) {
		this.titular = nome;
	}
	public String getTitular() {
		return this.titular;
	}
	public int getConta() {
		return this.conta;
	}
	public void setConta(int conta) {
		this.conta = conta;
	}
	public double getSaldo() {
		return this.saldo;
	}
	
	// Metodos da Classe
	public void deposito(double quantia) {
		this.saldo += quantia;
	}
	public void saque(double quantia) {
		this.saldo -= (quantia + 5);		
	}
	public void mostraDados() {
		System.out.println("Updated account data: ");
		System.out.println("Account " 
				+ getConta()
				+ ", Holder: "
				+ getTitular()
				+ ", Balance: $"
				+ getSaldo());
		
	}
	
}
