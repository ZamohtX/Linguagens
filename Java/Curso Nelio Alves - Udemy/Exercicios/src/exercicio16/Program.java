package exercicio16;

import java.util.Locale;
import java.util.Scanner;


public class Program {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Quantas pessoas serão digitadas? ");
		int n = sc.nextInt();
		Pessoa[] pessoas = new Pessoa[n];
		
		for (int i = 0; i < pessoas.length; i++ ) {
			System.out.println();
			System.out.println("=-=-=-=-Dados da " + (i+1) + "º Pessoa=-=-=-=-");
			System.out.print("Altura: ");
			double altura = sc.nextDouble();
			System.out.print("Genero: ");
			String genero = sc.next();
			pessoas[i] = new Pessoa(altura, genero);
			System.out.println("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
		}
		
		System.out.printf("Menor altura: %.2f", Pessoa.menorAltura(pessoas));
		System.out.printf("Maior altura: %.2f", Pessoa.maiorAltura(pessoas));
		System.out.printf("Média das alturas das mulheres: %.2f", Pessoa.mediaAltMulheres(pessoas));
		System.out.printf("Numero de homens: %", Pessoa.numHomens(pessoas));
		
		sc.close();
	}
}
