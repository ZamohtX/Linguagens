package exercicio15;

import java.util.Locale;
import java.util.Scanner;
import exercicio15.Aluno;

public class Program {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Quantos alunos serão digitados? ");
		int n = sc.nextInt();
		Aluno[] alunos = new Aluno[n];
		
		for (int i = 0; i < alunos.length; i++) {
			System.out.print("Nome: ");
			String nome = sc.next();
			double notaA = sc.nextDouble();
			double notaB = sc.nextDouble();
			alunos[i] = new Aluno(nome, notaA, notaB);	
		}
		System.out.print("Alunos Aprovados: ");
		for (int i = 0; i < alunos.length; i++) {
			if (alunos[i].getMedia() >= 6) {
				System.out.print(alunos[i].getNome() + " ");
			}
		}
		
		
		sc.close();
	}
	
}
