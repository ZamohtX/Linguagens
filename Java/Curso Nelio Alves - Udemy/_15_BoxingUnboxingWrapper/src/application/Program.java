package application;

public class Program {
	
	/*					Boxing, Unboxing e Wrapper Classes
	 * 
	 * 	Boxing:
	 * 		� � o processo de convers�o de um objeto tipo valor para um objeto tipo refer�ncia compativel
	 * 	Unboxing:
	 * 		� � o processo de convers�o de um objeto tipo refer�ncia para um objeto tipo valor compat�vel
	 * 
	 * 	Wrapper Classes:
	 * 		� S�o classes equivalentes aos tipos primitivos
	 * 		� Elas tem o mesmo nome dos tipos primitivos, por�m com a inicial maiuscula
	 * 		� Serve para fazer opera��es entre tipo valor e referencia sem precisar converter, fazendo boxing e unboxing automaticamente
	 * 		� � extremamente usado em classes
	 * 
	 * 
	 * 
	 * */
	
	public static void main(String[] args) {
		// Boxing -> obj � uma referencia na memoria que aponta pra x
		int x = 20;
		Object obj = x;
		System.out.println(obj);
		// Unboxing -> Convers�o do tipo referencia de obj para o tipo valor em y
		int y = (int) obj;
		System.out.println(y);
	
		
	}

}
