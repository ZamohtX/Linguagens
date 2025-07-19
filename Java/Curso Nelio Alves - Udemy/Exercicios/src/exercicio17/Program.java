package exercicio17;

import java.util.Locale;
import java.util.Scanner;
import java.util.List;
import java.util.ArrayList;


public class Program {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		List<Empregado> empregados = new ArrayList<>();
		
		System.out.print("Quantos funcionarios serão registrados? ");
		Integer n = sc.nextInt();
		System.out.println();
		
		for (int i = 0; i < n; i++) {
			System.out.println("Empregado " + (i+1) + ": ");
			System.out.print("ID: ");
			int id = sc.nextInt();
			System.out.print("Nome: ");
			String nome = sc.next();
			System.out.print("Salario: ");
			Double salario = sc.nextDouble();
			empregados.add(new Empregado(id, nome, salario));
			System.out.println();
		}

		System.out.print("Qual o id do empregado a ter o salario incrementado? ");
		Integer idFunc = sc.nextInt();
		System.out.print("Coloque a Porcentagem: ");
		Double porcSalary = sc.nextDouble();
		
		for (Empregado empregado : empregados) {
			if (empregado.getId().equals(idFunc)) {
				empregado.setSalario(empregado.getSalario() + (empregado.getSalario() * (porcSalary / 100)));
			}
		}
		
		
		System.out.println("Lista de funcionarios: ");
		for (int i = 0; i < empregados.size(); i++) {
			System.out.println(empregados.get(i).getId() + " " + empregados.get(i).getNome() + " " + empregados.get(i).getSalario());
		}
		
		
		sc.close();
	}
	
	
	
	
}
