package exercicio04;
import java.util.Locale;
import java.util.Scanner;
import exercicio04.Convesor;

public class Program {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		System.out.print("What is the dollar price? ");
		double priceDollar = sc.nextDouble();
		System.out.print("How many dollars be the bought? ");
		double carteira = sc.nextDouble();
		
		double reais = Convesor.dollarToReais(carteira, priceDollar);
		System.out.printf("Amount to pain in reais = %.2f", reais);
		
		
		
		sc.close();
		
	}

}
