package entities;

import java.util.Date;

public class HorasContrato {
	private Date data;
	private Double valorPorHora;
	private Integer horas;
	
	// Construtores
	public HorasContrato() {
		
	}
	public HorasContrato(Date data, Double valorPorHora, Integer horas) {
		this.data = data;
		this.valorPorHora = valorPorHora;
		this.horas = horas;
	}
	// Getters e Setters
	public Date getData() {
		return this.data;
	}
	public Double getValorPorHora() {
		return this.valorPorHora;
	}
	public Integer getHoras() {
		return this.horas;
	}
	public void setData(Date data) {
		this.data = data;
	}
	public void setValorPorHora(Double valorPorHora) {
		this.valorPorHora = valorPorHora;
	}
	public void setHoras(Integer horas) {
		this.horas = horas;
	}
	
	// Métodos
	public double valorTotal() {
		return valorPorHora * horas;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
