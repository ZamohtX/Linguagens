package entities;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import entities.enums.WorkerLevel;

public class Trabalhador {
	
	private String nome;
	private WorkerLevel cargo;
	private Double salarioBase;
	
	private Departamento departamento;
	private List<HorasContrato> contratos = new ArrayList<>();
	
	
	public Trabalhador() {
		
	}
	public Trabalhador(String nome, WorkerLevel cargo, Double salarioBase, Departamento departamento) {
		this.nome = nome;
		this.cargo = cargo;
		this.salarioBase = salarioBase;
		this.departamento = departamento;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public WorkerLevel getCargo() {
		return cargo;
	}
	public void setCargo(WorkerLevel cargo) {
		this.cargo = cargo;
	}
	public Double getSalarioBase() {
		return salarioBase;
	}
	public void setSalarioBase(Double salarioBase) {
		this.salarioBase = salarioBase;
	}
	public Departamento getDepartamento() {
		return departamento;
	}
	public void setDepartamento(Departamento departamento) {
		this.departamento = departamento;
	}
	public List<HorasContrato> getContratos() {
		return contratos;
	}

	
	// Métodos
	public void addContrato(HorasContrato contrato) {
		contratos.add(contrato);
	}
	public void removeContrato(HorasContrato contrato) {
		contratos.remove(contrato);
	}
	public Double salario(int ano, int mes) {
		double soma = salarioBase;
		Calendar cal = Calendar.getInstance();
		for (HorasContrato c: contratos) {
			cal.setTime(c.getData());
			int c_ano = cal.get(Calendar.YEAR);
			int c_mes = cal.get(Calendar.MONTH) + 1;
			if (ano == c_ano && mes == c_mes) {
				soma += c.valorTotal();
			}
		}
		return soma;
	}

}
