package exercicio04;

public class Convesor {
	public static final double IOF = 0.06 ;
	
	public static double dollarToReais(double dollar, double priceDollar) {
			return (dollar * priceDollar) - (dollar * priceDollar) * IOF;
	}
}
