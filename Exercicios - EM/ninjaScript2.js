function Ninja(nome, numShurikens) {
    this.nome = nome;
    this.shuriken = numShurikens;
}

Ninja.prototype.atirarShuriken = function(){
    if (this.shuriken > 0) {
        console.log(`${this.nome} atirou uma shuriken!`);
        this.shuriken--; 
    } else{
        console.log(`${this.nome} não tem mais shurikens!`);
    }
}

let ninja1 = new Ninja("Naruto", 3);
ninja1.atirarShuriken(); // "Naruto atirou um shuriken!"
ninja1.atirarShuriken(); // "Naruto atirou um shuriken!"
ninja1.atirarShuriken(); // "Naruto atirou um shuriken!"
ninja1.atirarShuriken(); // "Naruto não tem mais shurikens!"