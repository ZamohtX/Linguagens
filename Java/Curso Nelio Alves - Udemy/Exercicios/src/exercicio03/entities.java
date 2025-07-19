package exercicio03;

public class entities {
	public double n1, n2, n3;
	public String nome;
	
	public double notaFinal;
	
	public boolean aprovacao(double nota) {
		if (nota > 60) {
			return true;
		} else {
			return false;
		}
	}

}
