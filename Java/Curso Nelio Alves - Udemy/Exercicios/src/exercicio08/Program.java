package exercicio08;

import java.util.Locale;
import java.util.Scanner;

import exercicio08.Pessoa;

public class Program {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Quantas pessoas serão digitadas? ");
		int n = sc.nextInt();
		Pessoa[] pessoas = new Pessoa[n];
		
		for (int i = 0; i < pessoas.length; i++) {
			System.out.println("Dados da " + n + "º pessoa: ");
			System.out.print("Nome: ");
			String nome = sc.next();
			System.out.print("Idade: ");
			int idade = sc.nextInt();
			System.out.print("Altura: ");
			double altura = sc.nextDouble();
			pessoas[i] = new Pessoa(nome, idade, altura);	
		}
		
		System.out.println();
		System.out.print("Altura média: ");
		double somaAltura = 0;
		for (int i = 0; i < pessoas.length; i++) {
			somaAltura += pessoas[i].getAltura();
		}
		double media = somaAltura / pessoas.length;
	
		int quant = 0;
		for (int i=0; i < pessoas.length; i++ ) {
			if (pessoas[i].getIdade() < 16) {
				quant++;
			}
		}
		double porc16 = (quant * 100) / pessoas.length;
		System.out.printf("Pessoas com menos de 16 anos: %.2f % ", porc16  );
		for (int i=0; i < pessoas.length; i++) {
			if (pessoas[i].getIdade() < 16) {
				quant ++;
				System.out.println(pessoas[i].getNome());
			}
		}
		sc.close();
		
		
	
		
	}

}
