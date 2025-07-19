package site.maratonajava._05_EstruturasRepeticao;

public class EstruturasRepeticao {
    public static void main(String[] args) {
        // Estrturas de Repetição
        int condicao = 1;

        // While
        while (condicao != 5){
            System.out.println(condicao);
            condicao++;
        }
        condicao = 1;

        // Do While
        do {
            System.out.println(condicao);
            condicao++;
        } while (condicao != 5);

        // For
        for (int i = 0; i < 5; i++){
            System.out.println(i);
        }
    }
}
