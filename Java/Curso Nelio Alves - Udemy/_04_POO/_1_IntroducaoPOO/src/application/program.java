package application;

import java.util.Locale;
import java.util.Scanner;

import Classe.TriangleClass;


public class program {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
			// Iniciando x e y como Instâncias de TriangleClass
		TriangleClass x, y;
		x = new TriangleClass();
		y = new TriangleClass();
			// Guardando os valores dentro dos atributos da Instância
		System.out.println("Enter the measures of triangle X: ");
		x.a = sc.nextDouble();
		x.b = sc.nextDouble();
		x.c = sc.nextDouble();
		
		System.out.println("Enter the measures of triangle Y: ");
		y.a = sc.nextDouble();
		y.b = sc.nextDouble();
		y.c = sc.nextDouble();
		
			// Usando os métodos da Classe
		double areaX = x.area();
		double areaY = y.area();
		
		
		System.out.printf("Triangle X area : %.4f%n", areaX);
		System.out.printf("Triangle Y area: %.4f%n", areaY);
		
		if (areaX > areaY) {
			System.out.println("Larger area: X");
		} else {
			System.out.println("Larger area: Y");
		}
		
		sc.close();
		
	}
	
}
