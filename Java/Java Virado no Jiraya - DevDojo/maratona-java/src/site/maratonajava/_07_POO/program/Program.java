package site.maratonajava._07_POO.program;
import site.maratonajava._07_POO.entities.Estudante;
import site.maratonajava._07_POO.entities.Escola;
import site.maratonajava._07_POO.entities.Professor;

//              Programação Orientada a Objetos

public class Program {
    public static void main(String[] args){
        // Instancias da Classe
            // Escolas
        Escola escola1 = new Escola("Pequeno Principe");
            // Estudanres
        Estudante estudante1 = new Estudante("Thomaz", 20, 'H');
        Estudante estudante2 = new Estudante("Lilian", 18, 'M');
        Estudante estudante3 = new Estudante("Daniel", 19, 'H');
        Estudante estudante4 = new Estudante("Livia", 19, 'M');
        Estudante[] estudantes = new Estudante[]{estudante1, estudante2, estudante3, estudante4};
            // Professores
        Professor professor1 = new Professor("Celene" ,40, 'M');
        Professor professor2 = new Professor("Afrânio" ,60, 'H');
        Professor professor3 = new Professor("Esdras", 38, 'H');
        Professor[] professores = {professor1, professor2, professor3};

        // Criando Relação entre os Objetos
            // Estudante para Escola
        estudante1.setEscola(escola1);
        estudante2.setEscola(escola1);
        estudante3.setEscola(escola1);
        estudante4.setEscola(escola1);
            // Escola para Estudante
        escola1.setEstudantes(estudantes);
            // Professores para Escola
        professor1.setEscola(escola1);
        professor2.setEscola(escola1);
        professor3.setEscola(escola1);
            // Escola para Professores
        escola1.setProfessores(professores);

        //Execução
        escola1.printEstudantes();
        System.out.println();
        escola1.printProfessores();


    }
}
