package application;

import java.util.Locale;
import java.util.Scanner;

import entities.Product;


public class Program {
	/*
	 				Vetores
	 				
	  
	 Vetor é o nome dado a arranjos unidimensionais (array)
	 
	 Array:
	 	|-> Homogênea (dados do mesmo tipo)
	 	|-> Ordenada (cada elemento possui sua posição)
	 	|-> Alocada em apenas um bloco na memória
	 	
	  Sintaxe:
	  	tipo[] nomeDaVariavel = new tipo[tamanhoDoArray]
	  */
	
	
	
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		/*
		int n = sc.nextInt();
		// Declarando Vetor
		double[] vect = new double[n];
		
		// Colocando valores para cada posição do vetor
		for (int i = 0; i < n; i++) {
			vect[i] = sc.nextDouble();
		}
		double soma = 0;
		// Iterando sob o Vetor
		for (int i = 0; i < n; i++) {
			soma += vect[i];
		}
	*/
		int n = sc.nextInt();
		// Criando Vetor com Classe
		Product[] vect = new Product[n];
		// Colocando cada Objeto como um item dentro do Vetor
		for (int i = 0; i < vect.length; i++) {
			String name = sc.nextLine();
			double price = sc.nextDouble();
			vect[i] = new Product(name, price);
		}
		double soma = 0;
		// Iterando sob um Array composto de Objetos
		for (int i = 0; i < vect.length; i++) {
			soma += vect[i].getPrice();
		}
		double media = soma / n;
		System.out.println("Media: " + media);
		
		
		sc.close();
	}

}
