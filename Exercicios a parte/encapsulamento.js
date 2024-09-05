/* Encapsulamento é a prática de esconder os detalhes 
internos de um objeto, expondo apenas o que é necessário
através de interfaces públicas.

Isto é feito usando modificadores de acesso, sendo eles:
private, protected e public.
*/ 

class ContaBancaria {
    #saldo; // Atributo privado
  
    constructor() {
      this.#saldo = 0;
    }
  
    // Método público para depositar
    depositar(valor) {
      if (valor > 0) {
        this.#saldo += valor;
      }
    }
  
    // Método público para sacar
    sacar(valor) {
      if (valor > 0 && valor <= this.#saldo) {
        this.#saldo -= valor;
        return true;
      }
      return false;
    }
  
    // Método público para consultar o saldo
    getSaldo() {
      return this.#saldo;
    }
  }
  
  // Uso
  const minhaConta = new ContaBancaria();
  minhaConta.depositar(100);
  console.log(minhaConta.getSaldo()); // Saída: 100
  minhaConta.sacar(50);
  console.log(minhaConta.getSaldo()); // Saída: 50