package site.maratonajava._06_Arrays;

public class Arrays {
    public static void main(String[] args){
        //                      Arrays

        // Declarando um Array
            // Forma 1
        String[] nomes = new String[3];// -> Array declarado vazio
            // Forma 2
        int[] numeros = {1,2,3,4,5};// Array declarado com valores
            // Forma 3
        String[] casal = new String[]{"Thomaz", "Lilian",};
        // Atribuindo valor no Array
        nomes[0] = "Thomaz";
        nomes[1] = "Lilian";
        nomes[2] = "Daniel";

        // Acessar valor do Array
        for (int i = 0 ; i < nomes.length; i++){
            System.out.println(nomes[i]);
        }

        // ForEach
        for (int num : numeros){
            System.out.println(num);
        }

        // Arrays Multidimensionais (Matrizes)
        int[][] dias = {{1,2,3}, {4,5,6}};

        // Iterando sob Matrizes
        for (int i = 0; i < dias.length; i++){
            for (int j = 0; j < dias[i].length; j++){
                System.out.println(dias[i][j]);
            }
        }


















    }
}



























