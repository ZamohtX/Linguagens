package exercicio01;

public class retangulo {
	public double width;
	public double height;

	
	
	public double area() {
		return width * height;
				
	}
	
	public double perimeter() {
		return (width + height) * 2;
	}
	
	public double diagonal() {
		return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
		
	}
}
