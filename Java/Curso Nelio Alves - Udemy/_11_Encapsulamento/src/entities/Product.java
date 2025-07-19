package entities;

public class Product {
	
	/*
	  							Encapsulamento
		
	 � um princ�pio que consiste em esconder detalhes de implementa��o e uma classe, 
	expondo apena opera��es seguras e que mantenham os objetos em um estado consistente
	 
	Um objeto n�o deve expor nenhum atributo (modificador de aceso private)
	
	Os atributos devem ser acesados por meio de m�todos get e set:
		|-> Getters -> Retorna o valor do atributo
		|-> Setters -> Modifica o valor do atributo
	
	  */
	
	
	

	private String name;
	private double price;
	private int quantity;
	


	
	
	public Product(String name, double price, int quantity) {
		super();
		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}
	
	
	
	
	

	public String getName() {
		return name;
	}






	public void setName(String name) {
		this.name = name;
	}






	public double getPrice() {
		return price;
	}






	public void setPrice(double price) {
		this.price = price;
	}






	public int getQuantity() {
		return quantity;
	}




	public double totalValueInStock() {
		return price * quantity;
	}
	
	public void addProduct(int quantity) {
		this.quantity += quantity;
	}
	
	public void removeProducts(int quantity) {
		this.quantity -= quantity;
	}
	
	public String toString() {
		return name
				+ ", $" 
				+ String.format("%.2f", price)
				+ ",  "
				+  quantity
				+ " units, Total: $ "
				+ String.format("%.2f", totalValueInStock());
	}
	

}
