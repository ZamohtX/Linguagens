package application;

public class Program {
	
	/*					Boxing, Unboxing e Wrapper Classes
	 * 
	 * 	Boxing:
	 * 		º É o processo de conversão de um objeto tipo valor para um objeto tipo referência compativel
	 * 	Unboxing:
	 * 		º É o processo de conversão de um objeto tipo referência para um objeto tipo valor compatível
	 * 
	 * 	Wrapper Classes:
	 * 		º São classes equivalentes aos tipos primitivos
	 * 		º Elas tem o mesmo nome dos tipos primitivos, porém com a inicial maiuscula
	 * 		º Serve para fazer operações entre tipo valor e referencia sem precisar converter, fazendo boxing e unboxing automaticamente
	 * 		º É extremamente usado em classes
	 * 
	 * 
	 * 
	 * */
	
	public static void main(String[] args) {
		// Boxing -> obj é uma referencia na memoria que aponta pra x
		int x = 20;
		Object obj = x;
		System.out.println(obj);
		// Unboxing -> Conversão do tipo referencia de obj para o tipo valor em y
		int y = (int) obj;
		System.out.println(y);
	
		
	}

}
