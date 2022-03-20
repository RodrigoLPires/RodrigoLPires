class Calculadora:

    num1 = float(input('Digite um número:'))
    num2 = float(input('Digite outro número: '))

    def soma(self):
        return self.num1 + self.num2

    def subtracao(self):
        return self.num1 - self.num2

    def multiplicacao(self):
        return self.num1 * self.num2

if __name__ == '__main__':
    calculadora = Calculadora()
    print("A soma é: {}" .format(calculadora.soma()))
    print("A subtração é: {}" .format(calculadora.subtracao()))
    print("A multiplicação é: {}" .format(calculadora.multiplicacao()))
