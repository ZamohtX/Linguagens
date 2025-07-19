package application;

import java.util.List;
import java.util.stream.Collectors;
import java.util.ArrayList;

public class Program {
	/*
	 * 					Listas
	 * 
	 * 	� Caracteristicas:
	 * 		|-> Homogenea (dados do mesmo tipo)
	 * 		|-> Ordenada (elementos acessados por posi��o)
	 *	 	|-> Inicia vazia e seus elementos s�o alocados sob demanda
	 *		|-> Cada elemento ocupa um nodo da lista
	 * 
	 * 	� Tipo (interface) -> List
	 * 
	 * 	� Classes que implementam: 
	 * 		|-> ArrayList
	 * 		|-> LinkedList
	 * 
	 * 	� Vantagens:
	 * 		|-> Tamanho variavel
	 * 		|-> Facilidade de inser��es e dele��es
	 * 
	 * 	� Desvantagens:
	 * 		|-> Acesso sequencial aos elementos
	 * 
	 * 
	 * */
	public static void main(String[] args) {
		
		// Declarando Lista
		List<String> list = new ArrayList<>();
		
		// Tamanho Da lista
		list.size();
		
		// Adicionando elemento
		list.add("Thomaz"); 
		list.add("Lilian");
		list.add("Araujo");
		list.add("Arthur");
		
		// Inserindo elemento no meio da lista
		list.add(1, "Xavier");
		
		// Filtrando lista
		List<String> result = list.stream().filter(x -> x.charAt(0) == 'A').collect(Collectors.toList());
		
		// Encontrando Posi��o de Elemento
		int posThomaz = list.indexOf("Thomaz");
		
		// Encontrando Primeira Ocorr�ncia
		String name = list.stream().filter(x -> x.charAt(0) == 'A').findFirst().orElse(null);
		
		// Removendo elemento especifico
		list.remove("Xavier"); // Por compara��o
		list.remove(1); // Por indice
		
		// Removendo elementos por predicado
		list.removeIf(x -> x.charAt(0) == 'A'); // Fun��o Lambda
		

		
		
		for (String x : list) {
			System.out.println(x);
		}
	}
	

}
