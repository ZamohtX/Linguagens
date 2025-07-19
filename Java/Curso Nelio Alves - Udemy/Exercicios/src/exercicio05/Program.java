package exercicio05;

import java.util.Locale;
import java.util.Scanner;

import exercicio05.ContaBancaria;

public class Program {
	
	public static void main(String[] args) {
		
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		ContaBancaria conta = new ContaBancaria();
		
		
		System.out.print("Enter account number: ");
		conta.setConta(sc.nextInt());
		System.out.print("Enter account holder: ");
		conta.setTitular(sc.next());
		System.out.print("Is there na initial deposit? (y/n) ");
		String confirmDeposit = sc.next();
		if (confirmDeposit.equals("y")) {
			System.out.print("Enter intial deposit value: ");
			conta.deposito(sc.nextDouble());
		}
		
		System.out.println();
		conta.mostraDados();
		
		System.out.println();
		System.out.print("Enter a deposit value: ");
		conta.deposito(sc.nextDouble());
		conta.mostraDados();
		
		System.out.println();
		System.out.print("Enter a withdraw value: ");
		if (conta.getSaldo() > 0) {
			conta.saque(sc.nextDouble());
		} else {
			System.out.println();
			System.out.println("Saldo Insuficiente");
		}
		conta.mostraDados();
		
		
		
		
		
		sc.close();
		
		
	
		
		
		
		
	}

}
