package exercicio01;

import java.util.Scanner;

import exercicio01.retangulo;

import java.util.Locale;

public class application {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		retangulo rc = new retangulo();
		
		System.out.println("Enter rectangle width and height: ");
		System.out.print("Width:");
		rc.width = sc.nextDouble();
		System.out.print("Height: ");
		rc.height = sc.nextDouble();
		double area = rc.area();
		System.out.println(area);
		double perimeter = rc.perimeter();
		System.out.println(perimeter);
		double diagonal = rc.diagonal();
		System.out.println(diagonal);
		
		
		
	}
}

