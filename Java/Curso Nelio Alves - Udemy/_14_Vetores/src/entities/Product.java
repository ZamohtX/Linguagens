package entities;

public class Product {
	
	private String name;
	private double price;
	
	// Constructor
	
	public Product(String name, double price) {
		this.name = name;
		this.price = price;
	}
	// Getters e Setters
	public void setName(String name) {
		this.name = name;
	}
	public String getName() {
		return this.name;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public double getPrice() {
		return this.price;
	}
	

}
