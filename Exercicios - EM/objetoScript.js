function verificarInstancia(objeto, tipo) {
    if(objeto instanceof tipo) {
      console.log("O objeto é uma instância do tipo informado.");
    } else {
      console.log("O objeto NÃO é uma instância do tipo informado.");
    }
  }
  
  // exemplo de uso
  let meuArray = [1, 2, 3];
  verificarInstancia(meuArray, Array); // O objeto é uma instância do tipo informado.
  
  let meuObjeto = {nome: "Maria", idade: 30};
  verificarInstancia(meuObjeto, Array); // O objeto NÃO é uma instância do tipo informado.