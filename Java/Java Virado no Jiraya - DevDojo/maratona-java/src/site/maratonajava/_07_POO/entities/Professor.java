package site.maratonajava._07_POO.entities;

public class Professor {
    private String nome;
    private int idade;
    private char sexo;
    private String[] materias;
    private Escola escola;

    public Professor(String nome, int idade, char sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }





















    // Getters e Setters
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String[] getMaterias() {
        return materias;
    }

    public void setMatérias(String[] materias) {
        this.materias = materias;
    }

    public Escola getEscola() {
        return this.escola;
    }

    public void setEscola(Escola escola) {
        this.escola = escola;
    }
}
