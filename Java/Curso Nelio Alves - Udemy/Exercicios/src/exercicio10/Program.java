package exercicio10;

import java.util.Locale;
import java.util.Scanner;

public class Program {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Quantos numeros voce vai digitar? ");
		int n = sc.nextInt();
		double[] numeros = new double[n];
		for (int i = 0; i < numeros.length; i++) {
			System.out.print("Digite um número: ");
			numeros[i] = sc.nextDouble();
		}
		double maiorValor = 0;
		int posicaoDoMaior = 0;
		for (int i = 0; i < numeros.length; i++) {
			if (i == 0) {
				maiorValor = numeros[i];
				posicaoDoMaior = i;
			} else {
				if (numeros[i] > maiorValor) {
					maiorValor = numeros[i];
					posicaoDoMaior = i;
				}
			}
		}
		System.out.println("Maior valor: " + maiorValor);
		System.out.println("Posição do maior valor: " + posicaoDoMaior);
		
		
		
		
		sc.close();
	}

}
