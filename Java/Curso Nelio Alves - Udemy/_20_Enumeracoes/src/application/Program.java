package application;



import java.util.Date;
import entities.Order;
import entities.enums.OrderStatus;

public class Program {
	/*
	 * 					Enumeração
	 * 
	 * 	º Tipo Enumerado
	 * 		|-> Tipo especial que serve para especificar de forma literal um conjunto de constantes relacionadas
	 * 		|-> Palavra Chave: enum
	 * 		|-> Vantagens: melhor semântica, código mais legivel e auxiliado pelo compilador
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * */
	public static void main(String[] args) {
		// Criando um objeto da classe Order que recebe como argumento um atributo tipo enum
		Order order = new Order(1080, new Date(), OrderStatus.PAGAMENTO_PENDENTE);
		
		// Conversão de String para enum
		OrderStatus os1 = OrderStatus.ENTREGUE;
		OrderStatus os2 = OrderStatus.valueOf("ENTREGUE");
		System.out.println(os1);
		System.out.println(os2);
		
		
	}

}
