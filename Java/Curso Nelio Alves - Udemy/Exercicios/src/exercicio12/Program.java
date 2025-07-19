package exercicio12;
import java.util.Locale;
import java.util.Scanner;

public class Program {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Quantos elementos vai ter o vetor? ");
		int n = sc.nextInt();
		double[] vetor = new double[n];
		
		for (int i = 0; i < vetor.length; i++) {
			System.out.print("Digite o " + (i+1) + "º valor: ");
			vetor[i] = sc.nextDouble();
		}
		
		double somaVetor = 0;
		for (int i = 0; i < vetor.length; i++ ) {
			somaVetor += vetor[i];
		}
		double mediaVetor = somaVetor / vetor.length;
		System.out.printf("Média do vetor: %.2f", mediaVetor);
		System.out.println("Elementos abaixo da media:");
		for (int i = 0; i < vetor.length; i++) {
			if (vetor[i] < mediaVetor) {
				System.out.println(vetor[i]);
			}
		}
		
		
		
		
		sc.close();
	}

}
