package site.maratonajava._07_POO.entities;

public class Escola {
    // Atributos
    private String nome;
    private String endereco;
    private Estudante[] estudantes;
    private Professor[] professores;

    // Construtors
    public Escola(String nome){
        this.nome = nome;
    }

    // Métodos
    public void printProfessores(){
        for (Professor professor : professores){
            System.out.println(professor.getNome() + " ");
        }
    }
    public void printEstudantes(){
        for (Estudante estudante: estudantes){
            System.out.println(estudante.getNome() + " ");
        }
    }

















    
    // Getters e Setters
    public void setNome(String nome){
        this.nome = nome;
    }
    public String getNome(){
        return this.nome;
    }
    public String getEndereco() {
        return endereco;
    }
    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public Professor[] getProfessores() {
        return professores;
    }

    public void setProfessores(Professor[] professores) {
        this.professores = professores;
    }

    public void setEstudantes(Estudante[] estudantes) {
        this.estudantes = estudantes;
    }
    public Estudante[] getEstudantes(){
        return estudantes;
    }

}
