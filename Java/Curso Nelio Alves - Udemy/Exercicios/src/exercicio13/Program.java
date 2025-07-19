package exercicio13;

import java.util.Locale;
import java.util.Scanner;

public class Program {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Quantods elementos vai ter o vetor? ");
		int n = sc.nextInt();
		int[] numeros = new int[n];
		double somaPares = 0;
	
		for (int i = 0; i < numeros.length; i++) {
			System.out.print("Digite um número: ");
			numeros[i] = sc.nextInt();
		}
		for (int i = 0; i< numeros.length; i++ ) { 
			if (numeros[i] % 2 == 0) {
				somaPares += numeros[i];
			}
		}
		if (somaPares == 0) {
			System.out.println("Nenhum Número PAR");
		} else {
			double mediaPares = somaPares / numeros.length;
			System.out.printf("Media dos PARES: %.2f", mediaPares);
		}
		
		
		sc.close();
	}
	
	
}
