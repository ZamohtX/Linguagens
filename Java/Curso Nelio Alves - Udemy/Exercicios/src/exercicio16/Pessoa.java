package exercicio16;

public class Pessoa {
	
		private double altura;
		private String genero;
		
		public Pessoa(double altura, String genero) {
			this.altura = altura;
			this.genero = genero;
		}
		
		public double getAltura() {
			return this.altura;
		}
		public String getGenero() {
			return this.genero;
		}
		
		// Metodos
		public static double maiorAltura(Pessoa[] pessoas) {
			double maiorAltura = 0;
			for (int i = 0; i < pessoas.length; i++) {
				if (i == 0) {
					maiorAltura = pessoas[i].getAltura();
				}
				else {
					if (pessoas[i].getAltura() > maiorAltura) {
						maiorAltura = pessoas[i].getAltura();
					}
				}
			}
			return maiorAltura;
		}
		
		public static double menorAltura(Pessoa[] pessoas) {
			double menorAltura = 0;
			for ( int i = 0; i< pessoas.length; i++) {
				if (i == 0 ) {
					menorAltura = pessoas[i].getAltura();
				} else {
					if (pessoas[i].getAltura() < menorAltura) {
						menorAltura = pessoas[i].getAltura();
					}
				}
			}
			return menorAltura;
		}
		
		public static double mediaAltMulheres(Pessoa[] pessoas) {
			double soma = 0;
			for (int i = 0; i < pessoas.length; i++) {
				if (pessoas[i].getGenero().equalsIgnoreCase("f")) {
					soma += pessoas[i].getAltura();
				}
			}
			double media = soma / pessoas.length;
			return media;
		}
		
		public static int numHomens(Pessoa[] pessoas) {
			int numHomens = 0;
			for (int i = 0; i < pessoas.length; i++) {
				if (pessoas[i].getGenero().equalsIgnoreCase("m")) {
					numHomens++;
				}
			}
			return numHomens;
		}
	
		
		
		
		
	
	
}
