package site.maratonajava._07_POO.entities;

/*
                Ordem de Execução:
    0 - Bloco de inicialização estatico quando JVM carregar a classe
    1 - Alocação de espaço em memoria para o objeto
    2 - Atributos são criados e inicializados
    3 - Blocos de inicialização da instância são executados
    4 - Construtor é executado
*/

// Definindo Classe
public class Estudante {
    // Atributos
        // Instancia
    private String nome;
    private int idade;
    private char sexo;
    private Escola escola;
    private int[] faltasPorMateria;
        // Estatico
    private static int MateriasMaximas = 10;
    private static int[] idMaterialEstojo;

    // Bloco de Inicialização
        // Instancia
    {
        faltasPorMateria = new int[50];
        for (int falta : faltasPorMateria){ // Usado para não precisar inicializar a variavel dentro de cada construtor
            faltasPorMateria[falta] = falta + 1;
        }
    }
        // Estatico
    static{
        idMaterialEstojo = new int[20];
        for (int id : Estudante.idMaterialEstojo){
            Estudante.idMaterialEstojo[id] = id;
        }
    }

    // Construtor
        // Construtor padrão
    public Estudante(String nome, int idade, char sexo){
        this(); // -> Executando Outro Construtor
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
        // Construtor com Sobrecarga
    public Estudante(String nome, int idade, char sexo, Escola escola){
        this(nome, idade, sexo); // -> Executando o constutor acima por meio de Sobrecarga
        this.escola = escola;
    }
        // Construtor sem nada
    public Estudante(){
    }


    // Métodos
        // Instancia
    public void estudar(){ // -> Não retorna nada
        System.out.println(this.nome + "está estudando");// This se refere a instancia do Objeto
    }                   // parâmetros
    public double media(double n1, double n2){ // Retorna valor
        double media =  (n1 + n1) / 2;
        return media;
    }
        // VarArgs
    public double somaNotas(double... notas){// Usando VarArgs para passar varios argumentos ao mesmo tempo
        double soma = 0;
        for (double num : notas){
            soma += num;
        }
        return soma;
    }


    // Getters e Setters
    public void setNome(String nome){
        this.nome = nome;
    }
    public void setIdade(int idade){
        this.idade = idade;
    }
    public void setSexo(char sexo){
        this.sexo = sexo;
    }
    public static void setMateriasMaximas(int materiasMaximas){
        Estudante.MateriasMaximas = materiasMaximas;
    }
    public String getNome(){
        return this.nome;
    }
    public int getIdade(){
        return this.idade;
    }
    public char getSexo(){
        return this.sexo;
    }
    public static int getMateriasMaximas(){
        return Estudante.MateriasMaximas;
    }
    public Escola getEscola() {
        return this.escola;
    }

    public void setEscola(Escola escola) {
        this.escola = escola;
    }


}
