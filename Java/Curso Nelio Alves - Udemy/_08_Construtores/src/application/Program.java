package application;

import java.util.Locale;
import java.util.Scanner;
import entities.Product;
public class Program {
	/*
	 				Construtor
	 				
	 				
	 � a opera��o especial da classe, que � executada no momento da instancia��o do objeto, pelo comando "new"
	 
	 Usos comuns:
	 	|-> Iniciar valores dos atributos
	 	|-> Permitir que o objeto receba dados / depend�ncias no momento da instancia��o
	 
	 Se o construtor customixzado n�o for especificado, a classe usar� o construtor padr�o:
	 	|-> Product p = new Product();
	 
	 Sobrecarga -> Quando usamos mais de um construtor na classe
	 
	 */

	public static void main(String[] args) {
		
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		

		System.out.println("Enter product data:");
		System.out.print("Name: ");
		String name = sc.nextLine();
		System.out.print("Price: ");
		double price = sc.nextDouble();
		System.out.print("Quantity in stock: ");
		int quantity = sc.nextInt();
		
		// Inst�nciando a classe com o construtor criado 
		Product product = new Product(name, price, quantity);
		
		System.out.println();
		System.out.println("Product data: " + product);
		
		System.out.println();
		System.out.print("Enter the number of products to be added in stock: ");
		quantity = sc.nextInt();
		product.addProduct(quantity);
		
		System.out.println();
		System.out.println("Updated data: " + product);
		
		System.out.println();
		System.out.print("Enter the number of products to be removed from stock: ");
		quantity = sc.nextInt();
		product.removeProducts(quantity);
		
		System.out.println();
		System.out.println("Updated data: " + product);
		
		sc.close();
		
		
	}
	
	
}
