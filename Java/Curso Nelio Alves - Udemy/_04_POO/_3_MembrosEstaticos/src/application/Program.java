package application;

import java.util.Locale;
import java.util.Scanner;
import util.Calculator;

public class Program {
	/*
	 				Membros Estaticos
	 	
	 	Diferente dos membros de instancia que se referem a caracteristicas ou atributos particulares para cada instancia
	 	os membros Estaticos se referem a caracteristicas comuns da Classe inteira, que não muda de instância para instância
	 	
	 	Chamados de membros de classe
	 	
	 	Não precisam de Objeto para serem referenciados
	 	
	 	Classes que possuam membros estaticos pode ser tambem uma classe estatica, ou seja, ela não poderá ser intanciada.
	 	
	 	Aplicações:
	 		|-> Classes utilitarias -> Ex: Math.sqrt(double);
	 		|-> Declaração de Constantes
	  	
	 
	 */
		// Declarando uma Constante

	
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter radius: ");
		double radius = sc.nextDouble();
		double c  = Calculator.circunference(radius);
		double v = Calculator.volume(radius);
		 
		System.out.printf("Circunferece: %.2f ", c);
		System.out.printf("Volume: %.2f", v);
		 		
		sc.close();
	
	}
	
	
	
}
