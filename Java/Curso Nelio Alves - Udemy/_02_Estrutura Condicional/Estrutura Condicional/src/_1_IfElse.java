public class _1_IfElse {
    /*
                   if e else
    x = 10

        Estrutura condicional simples
    if ( x == 10) {
        System.out.print("Verdade");
    }
        Estrutura condicional composta
    String horario = "Tarde";
    if ( horario == "Dia" ) {
        System.out.println("Está de Dia");
    } else if ( horario == "Tarde") {
        System.out.println("Está de Tarde");
    } else {
        System.out.println("Está de Noite");
    }



     */
    public static void main(String[] args) throws Exception {
        String horario = "Tarde";
        if ( horario == "Dia" ) {
            System.out.println("Está de Dia");
        } else if ( horario == "Tarde") {
            System.out.println("Está de Tarde");
        } else {
            System.out.println("Está de Noite");
        }
    }
}