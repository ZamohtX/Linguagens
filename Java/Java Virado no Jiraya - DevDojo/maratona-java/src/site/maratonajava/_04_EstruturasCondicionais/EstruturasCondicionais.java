package site.maratonajava._04_EstruturasCondicionais;

public class EstruturasCondicionais {
    public static void main(String[] args) {
        //          Estruturas Condicionais
        int idade = 20;

        // If e Else0
        if (idade > 18 && idade < 65){
            System.out.println("Adulto");
        } else if (idade < 18) {
            System.out.println("Menor de idade");
        } else {
            System.out.println("Idoso");
        }

        // Operador Ternário
        boolean menorIdade = (idade < 18) ? true : false;

        // Switch
        switch (idade){
            case 18:
                System.out.println("Tenho 18 anos");
                break;
            case 19:
                System.out.println("Tenho 19 anos");
                break;
            case 20:
                System.out.println("Tenho 20 anos");
                break;
            default:
                System.out.println("Tenho menos de 18 anos e mais de 20");
                break;


        }

    }
}
