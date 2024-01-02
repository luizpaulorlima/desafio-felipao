class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
    
        if (this.tipo === 'mago') {
            ataque = 'magia';
        } else if (this.tipo === 'guerreiro') {
            ataque = 'sua espada';
        } else if (this.tipo === 'monge') {
            ataque = 'artes marciais';
        } else if (this.tipo === 'ninja') {
            ataque = 'sua shuriken';
        } else {
            ataque = 'atacou';
        }
    
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroi1 = new heroi('Mago Negro', 25, 'mago');
heroi1.atacar();  // Saída: "o mago atacou usando magia"

let heroi2 = new heroi('Guerreiro de Fogo', 30, 'guerreiro');
heroi2.atacar();  // Saída: "o guerreiro atacou usando espada"

let heroi3 = new heroi('Monge Coin', 98, 'monge');
heroi3.atacar();  // Saída: "o monge atacou usando artes marciais"

let heroi4 = new heroi('Naruto Ninja', 18, 'ninja');
heroi4.atacar();  // Saída: "o Ninja atacou usando Shuriken"
