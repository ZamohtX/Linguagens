package exercicio07;

import java.util.Scanner;
import java.util.Locale;


public class Program {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Quantos números voce vai digitar? ");
		int n = sc.nextInt();
		double[] notas = new double[n];
		for (int i = 0; i < notas.length; i++) {
			System.out.print("Digite um número: ");
			notas[i] = sc.nextDouble();
		}
		double somaTotal = 0;
		System.out.print("Valores: ");
		for (int i=0; i < notas.length; i++) {
			System.out.print(notas[i] + " ");
			somaTotal += notas[i];
		}
		System.out.println();
		System.out.println("Soma: " + somaTotal);
		double media = somaTotal / notas.length;
		System.out.printf("Media: %.2f", media);
		
		sc.close();
	}
	
}
