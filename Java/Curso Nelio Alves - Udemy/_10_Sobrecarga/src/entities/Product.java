package entities;

public class Product {
	
	public String name;
	public double price;
	public int quantity;
	
	// Definindo o Construtor Padrão
	public Product() {
		
	}
		
	// Criando o Construtor com Parametros
		// Agora todo produto é obrigado a receber esses atributos como argumento
	public Product(String name, double price, int quantity) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}
	
	// Criando outro Construtor com Sobrecarga
		// Quando a classe for instanciada somente com 2 parametros, vai cair nesse novo construtor
	public Product(String name, double price) {
		this.name = name;
		this.price = price;
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
