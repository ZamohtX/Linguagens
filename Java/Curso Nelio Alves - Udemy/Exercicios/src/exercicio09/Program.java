package exercicio09;

import java.util.Scanner;
import java.util.Locale;


public class Program {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Quantos anos você vai digitar? ");
		int n = sc.nextInt();
		int[] numeros = new int[n];
		
		for (int i = 0; i < numeros.length; i++) {
			System.out.print("Digite um numero: ");
			numeros[i] = sc.nextInt();
		}
		System.out.print("Numeros Pares: ");
		int quantPares = 0;
		for (int i = 0; i < numeros.length; i++) {
			if (numeros[i] % 2 == 0) {
				quantPares++;
				System.out.print(numeros[i] + " ");
			}
		}
		System.out.println();
		System.out.println("Quantidade de Pares: " + quantPares);
		
		
		
		sc.close();
		
	}
	
	
}
