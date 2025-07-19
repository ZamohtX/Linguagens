package exercicio18;

import java.util.Scanner;
import java.util.Locale;

public class Program {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		
		System.out.println("Analisador de Matriz");
		System.out.print("Linhas: ");
		Integer linhas = sc.nextInt();
		System.out.print("Colunas: ");
		Integer colunas = sc.nextInt();
		
		Integer[][] matriz  = new Integer[linhas][colunas];
		
		for (int i = 0; i < linhas; i++) {
			for (int j = 0; j < colunas; j++) {
				System.out.printf("Digite o valor de ["+i+"]["+j+"]:");
				matriz[i][j] = sc.nextInt();
			}
		}
		
		System.out.println("=-=-=-=-=-=-=-=-=-=-");
		System.out.print("Digite o número a ser analisado: ");
		Integer num = sc.nextInt();
		for (int i = 0; i < linhas; i++) {
			for (int j = 0; j < colunas; j++) {
				if (matriz[i][j].equals(num)) {
					System.out.println("Position: ["+i+"]["+j+"]" );
					if (i > 0) {
						System.out.println("Left: " + matriz[i][j-1]);
					}
					if (i < colunas) {
						System.out.println("Right: " + matriz[i][j+1]);
					}
					if (j > 0) {
						System.out.println("Up: " + matriz[i-1][j]);
					}
					if (j < linhas) {
						System.out.println("Down: " + matriz[i+1][j]);
					}					
				}
			}
		}
	
		
		
		
		sc.close();

	}
}
