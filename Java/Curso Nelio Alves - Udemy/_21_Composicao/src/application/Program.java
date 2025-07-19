package application;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Scanner;

import entities.Departamento;
import entities.HorasContrato;
import entities.Trabalhador;
import entities.enums.WorkerLevel;

public class Program {
	public static void main(String[] args) throws ParseException {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		
		
		System.out.print("Insira o nome do departamento: ");
		String nomeDepartamento = sc.nextLine();
		System.out.println("Insira os dados do Trabalhador: ");
		System.out.print("Nome: ");
		String nomeTrabalhador = sc.nextLine();
		System.out.print("Cargo: ");
		String cargoTrabalhador = sc.nextLine();
		System.out.print("Salário Base: ");
		Double salarioTrabalhador = sc.nextDouble();
		Trabalhador trabalhador = new Trabalhador(nomeTrabalhador, WorkerLevel.valueOf(cargoTrabalhador), salarioTrabalhador, new Departamento(nomeDepartamento));
		
		System.out.print("Quantos contratos o Trabalhador possui? ");
		int n = sc.nextInt();
		
		for (int i=0; i<n; i++) {
			System.out.println("Insira os dados do " + (i+1) + "º contrato");
			System.out.print("Data (DD_MM_AAAA): ");
			Date dataContrato = sdf.parse(sc.next());
			System.out.print("Valor por Hora: ");
			Double valorPorHora = sc.nextDouble();
			System.out.print("Quantidade de Horas: ");
			Integer horas = sc.nextInt();
			HorasContrato contrato = new HorasContrato(dataContrato, valorPorHora, horas);
			trabalhador.addContrato(contrato);
		
		}
		
		System.out.println();
		System.out.print("Informe mês e ano para calcular salario (MM/YYYY): ");
		String mesEAno = sc.next();
		int mes = Integer.parseInt(mesEAno.substring(0,2));
		int ano = Integer.parseInt(mesEAno.substring(3));
		System.out.println("Nome: " + trabalhador.getNome());
		System.out.println("Departamento: " + trabalhador.getDepartamento().getNome());
		System.out.println("Salario em  " + mesEAno + ": " + String.format("%.2f", trabalhador.salario(mes, ano)));
		
		
		
		
		
		
		sc.close();
	}
}
