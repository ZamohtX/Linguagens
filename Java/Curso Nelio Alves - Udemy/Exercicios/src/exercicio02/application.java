package exercicio02;

import java.util.Locale;
import java.util.Scanner;

import exercicio02.funcionario;

public class application {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		funcionario func = new funcionario();
		System.out.print("Name: ");
		func.name = sc.next();
		System.out.print("Gross Salary: ");
		func.grossSalary = sc.nextDouble();
		System.out.print("Tax: ");
		func.tax = sc.nextDouble();
		double salaryReal = func.netSalary();
		
		System.out.println("Employee: " + func.name + ", $" + salaryReal );
		
		System.out.println("Which percentage to increase salary? ");
		func.IncreaseSalary(sc.nextDouble());
		System.out.println("Update data: " + func.name  + ", $" + func.grossSalary);
		
		
		
		
		
		
		
		
		
		
	}
	
}
