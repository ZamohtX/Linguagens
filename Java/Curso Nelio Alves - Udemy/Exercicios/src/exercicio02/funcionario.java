package exercicio02;

public class funcionario {
	public String name;
	public double grossSalary;
	public double tax;
	
	public double netSalary() {
		return (grossSalary - (grossSalary * (tax/100)));
	}
	
	public void IncreaseSalary(double percentage) {
		grossSalary += grossSalary * (percentage / 100);				
	}
}
