package application;

import java.util.Locale;
import java.util.Scanner;
import entities.Product;
public class Program {
	/*
	 				Construtor
	 				
	 				
	 É a operação especial da classe, que é executada no momento da instanciação do objeto, pelo comando "new"
	 
	 Usos comuns:
	 	|-> Iniciar valores dos atributos
	 	|-> Permitir que o objeto receba dados / dependências no momento da instanciação
	 
	 Se o construtor customixzado não for especificado, a classe usará o construtor padrão:
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
		
		// Instânciando a classe com o construtor criado 
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
