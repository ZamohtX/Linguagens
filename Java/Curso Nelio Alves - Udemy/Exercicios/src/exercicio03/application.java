package exercicio03;
import java.util.Locale;
import java.util.Scanner;

import exercicio03.entities;



public class application {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		entities aluno = new entities();
		
		System.out.print("Nome do aluno: ");
		aluno.nome = sc.next();
		System.out.print("Digite a 1º nota: ");
		aluno.n1 = sc.nextDouble();
		System.out.print("Digite a 2º nota: ");
		aluno.n2 = sc.nextDouble();
		System.out.print("Digite a 3º nota: ");
		aluno.n3 = sc.nextDouble();
		aluno.notaFinal = aluno.n1 + aluno.n2 + aluno.n3;
		System.out.println("Nota Final: " + aluno.notaFinal);
		boolean passou = aluno.aprovacao(aluno.notaFinal);
		if (passou) {
			System.out.println("O aluno " + aluno.nome + " Passou de ano");
		} else {
			System.out.println("O aluno " + aluno.nome + " Não passou de ano" );
			double faltaPontos = 60 - aluno.notaFinal;
			System.out.println("Faltaram " + faltaPontos + " pontos");
		}
		
		
	
		
	}
}
