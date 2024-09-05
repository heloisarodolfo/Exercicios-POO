/* Polimorfismo é a capacidade de um método de ter 
comportamentos diferentes dependendo do objetivo que
o chama. 
*/ 

class Animal {
    constructos(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log('O animal fez barulho');
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log('O cachorro latiu');
    }
}

class Gato extends Animal {
    fazerSom() {
        console.log('O gato miou');
        
    }
}

const meuAnimal = new Cachorro();
meuAnimal.fazerSom(); // Saída: "O cachorro latiu"

const outroAnimal = new Gato();
outroAnimal.fazerSom(); // Saída: "O gato miou"
