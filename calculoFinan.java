package Financiamento;

import java.text.DecimalFormat;
import java.util.Scanner;

public class calculoFinan {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        DecimalFormat decValor = new DecimalFormat("###,##0.00");
        DecimalFormat decPrazo = new DecimalFormat("000");
        int prazo;
        float valor;
        float taxa;

        System.out.println("Qual o prazo (em meses) desejado?");
        prazo = scan.nextInt();
        System.out.println("Qual a taxa mensal desejada?");
        taxa = scan.nextFloat();
        System.out.println("Qual valor você quer simular?");
        valor = scan.nextFloat();

        System.out.println("O prazo desejado foi " + prazo + " meses e a taxa foi " + taxa + "% e o valor " + valor + "\n");

        int i = 1;
        System.out.println("Prazo " + " Juros " + "Amortização" + " Pagamentos");
        do {
            float amortizacao;
            amortizacao = (valor/prazo);

            float saldo;
            saldo = ( amortizacao * (prazo - ( i - 1 )) );

            float juro;
            juro = saldo * (taxa/100);

            float pagamento;
            pagamento = juro + amortizacao;

            System.out.println( decPrazo.format(i) + " - " + decValor.format(juro) + " - " + decValor.format(amortizacao) + " - " + decValor.format(pagamento));

            i++;
        }while (i <= prazo);

    }

}
