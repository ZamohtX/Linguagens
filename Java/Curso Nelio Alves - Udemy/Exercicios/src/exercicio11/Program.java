package exercicio11;

import java.util.Locale;
import java.util.Scanner;

public class Program {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Quantos valores vai ter cada vetor? ");
		int n = sc.nextInt();
		double[] vetor1 = new double[n];
		double[] vetor2 = new double[n];
		double[] vetorResultante = new double[n];
		
		System.out.println("Digite os valores do vetor A: ");
		for (int i = 0; i < n; i++) {
			vetor1[i] = sc.nextDouble();
		}
		System.out.println("Digite os valores do vetor B:");
		for (int i = 0; i < n; i++) {
			vetor2[i] = sc.nextDouble();
		}
		for (int i = 0; i < n; i++) {
			vetorResultante[i] = vetor1[i] + vetor2[i];
		}
		System.out.println("Vetor Resultante: ");
		for (int i = 0; i < vetorResultante.length; i++) {
			System.out.println(vetorResultante[i]);
		}
		sc.close();
		
	}
}
