// definição do objeto Inimigo
let Inimigo = {
    nome: "Orochimaru",
    vivo: true,
    atirarShuriken: function() {
      console.log(`${this.nome} foi atingido por uma shuriken!`);
      this.vivo = false;
    }
  }
  
  let inimigo1 = Object.create(Inimigo);
  inimigo1.nome = "Orochimaru";
  console.log(inimigo1.vivo); // true
  inimigo1.atirarShuriken(); // "Orochimaru foi atingido por um shuriken!"
  console.log(inimigo1.vivo); // false