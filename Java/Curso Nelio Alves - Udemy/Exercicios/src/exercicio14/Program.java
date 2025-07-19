package exercicio14;

import java.util.Locale;
import java.util.Scanner;
import exercicio14.Pessoa;

public class Program {
	
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Quantas pessoas voce vai digitar?" );
		int n = sc.nextInt();
		Pessoa[] pessoas = new Pessoa[n];
		
		for (int i = 0; i < pessoas.length; i++) {
			System.out.println("Dados da " + (i+1) + "º pessoa: ");
			System.out.print("Nome: ");
			String nome = sc.next();
			System.out.print("Idade: ");
			int idade = sc.nextInt();
			pessoas[i] = new Pessoa(nome, idade);
		}
		String maisVelha = "";
		int idadeVelha = 0;
		for (int i = 0; i < pessoas.length; i++) {
			if (i == 0) {
				idadeVelha = pessoas[i].getIdade();
				maisVelha = pessoas[i].getNome();
			} else {
				if (pessoas[i].getIdade() > idadeVelha) {
					idadeVelha = pessoas[i].getIdade();
					maisVelha = pessoas[i].getNome();
				}
			}
		}
		System.out.println("Pessoa mais velha: " + maisVelha);
		
		sc.close();
	}

}
