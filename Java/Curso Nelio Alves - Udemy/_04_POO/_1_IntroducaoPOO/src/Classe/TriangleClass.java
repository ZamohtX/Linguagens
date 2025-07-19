/*						Classe

	
	Classes representam entidades ou objetos que possuem suas particularidades

	As classes possuem: Atributos e Metodos
		|-> Atributos = dados / variaveos / campos
		|-> Métodos = funções / operações
		
		 
	Recursos das Classes:
		|-> Contruturoes
		|-> Sobrecarga
		|-> Encapsulamento
		|-> Herança
		|-> Polimorfismo
		
												
	*/
	// Pacote que a Classe pertence
package Classe;
	// Nomeação da Classe

public class TriangleClass {
		// Atributos da Classe
	public double a;
	public double b;
	public double c;
	
		// Método da Classe
	public double area() {
		double p = (a + b + c) / 2;
		double result = Math.sqrt(p *  (p - a) * (p - b) * (p - c));
		return result;
	}
	
	
}
