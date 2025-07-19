package exercicio06;

import java.util.Scanner;
import java.util.Locale;

public class Program {
	
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Quantos numéros voce vai digitar? ");
		int n = sc.nextInt();
		int[] numeros = new int[n];
		
		for (int i = 0; i < numeros.length; i++) {
			System.out.print("Digite um número: ");
			numeros[i] = sc.nextInt();
		}
	
		System.out.println("Numeros negativos: ");
		for (int i = 0; i< numeros.length; i++) {
			if (numeros[i] < 0) {
				System.out.println(numeros[i]);
			}
		}
		sc.close();
		
		
		
	}

}
