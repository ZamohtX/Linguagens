public class _3_ExpressaoCondicionalTernaria {
    /*
            Expressao Condicional Ternaria
    
        Estrutura opcional ao if-else quando se deseja decidir um VALOR com base em uma condição

        Sintaxe:
        (  condição ) ? valor_se_verdadeiro : valor_se_falso
    
     */
    public static void main(String[] args) {
        int idade = 20;
        String adultoOrNot = (idade > 18) ? "é Adulto" : "não é um Adulto";
        System.out.println("Thomaz "+ adultoOrNot);
    }
}
