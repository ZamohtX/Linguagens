package entities;

public class Product {
	
	public String name;
	public double price;
	public int quantity;
	
	// Criando o Construtor
		// Agora todo produto � obrigado a receber esses atributos como argumento
	public Product(String name, double price, int quantity) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
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
