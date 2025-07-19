package entities;

import java.util.Date;

import entities.enums.OrderStatus;

public class Order {
	
	// Atributos
	private Integer id;
	private Date moment;
	private OrderStatus status;
	
	// Construtores
	public Order() {	
	}
	
	public Order(Integer id, Date moment, OrderStatus status) {
		super();
		this.id = id;
		this.moment = moment;
		this.status = status;
	}
	
	// Getters e Setters

	public Integer getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Order [id=" + id + ", moment=" + moment + ", status=" + status + "]";
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getMoment() {
		return moment;
	}

	public void setMoment(Date moment) {
		this.moment = moment;
	}

	public OrderStatus getStatus() {
		return status;
	}

	public void setStatus(OrderStatus status) {
		this.status = status;
	}

}
