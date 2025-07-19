package application;

import java.util.Locale;
import java.util.Scanner;

public class Program {
	/*
	 * 						Matriz
	 * 
	 * 	º Matriz é o nome dados a arranjos bidimensionais (vetor de vetores)
	 * 	
	 * 	º Caracteristicas do Array:
	 * 		|-> Homogenea (dados do mesmo tipo)
	 * 		|-> Ordenada (elementos acessados por meio de posições)
	 * 		|-> Alocada de uma vez só, em um bloco contíguo de memória
	 * 
	 * 	º Vantagens:
	 * 		|-> Acesso imediato aos elementos pela sua posição
	 * 	
	 * 	º Desvantagens: 
	 * 		|-> Tamanho fixo
	 * 		|-> Dificuldade de realizar insções e deleções	
	 * 
	 * 
	 * 
	 * */
	
	
	
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		// Tamanho da Matriz
		int linhas = sc.nextInt();
		int colunas = sc.nextInt();
		
		// Criando a Matriz Bidimensional
		int[][] mat = new int[linhas][colunas];
		
		// Iterando sob a Matriz
		for (int i=0; i < mat.length; i++) {
			for (int j = 0; j < mat[i].length; j++) {
				// Adicionando valores a matriz
				mat[i][j] = sc.nextInt();
			}
		}
		
		// Diagonal Principal
		for (int i=0; i< mat.length; i++) {
				System.out.print(mat[i][i] + " ");	
		}
		
		// Filtrando Matriz
		int negativos = 0;
		for (int i = 0; i < mat.length; i++) {
			for (int j = 0; j < mat[i].length; j++) {
				if (mat[i][j] < 0) {
					negativos++;
				}
			}
		}
		
		
		
		
		
		
		
		
		
		sc.close();	
	}
}
