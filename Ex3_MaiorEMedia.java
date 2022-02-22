package ExercíciosLoops;

import InterfaceGráfica.Cadastros;

import java.text.DecimalFormat;
import java.util.Arrays;
import java.util.Scanner;

/*
Faça um programa que leia 5 números e informe o maior número
e a média desses números.
 */

public class Ex3_MaiorEMedia {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int argumentos;

        System.out.println("Digite o número de argumentos: ");
        argumentos = scan.nextInt();

        int numero;
        int maior = 0;
        float soma = 0;
        float media;
        DecimalFormat dec2 = new DecimalFormat("#0.00");
        int count = 0;
        int [] todos = new int[argumentos];

        do {
            System.out.println("Digite o " + (count + 1) + "º" + " número: ");
            numero = scan.nextInt();

            if (numero > maior) maior = numero;

            soma += numero;

            todos [count] = numero;

            count++;

            media = soma / count;

        } while (count < argumentos);{

            System.out.println("Os " + count + " números digitados foram: " + Arrays.toString(todos));
            System.out.println("O maior número digitado foi " + maior + "!");
            System.out.println("A soma é " + soma + " e a média é " + dec2.format(media));
        }
    }
}
