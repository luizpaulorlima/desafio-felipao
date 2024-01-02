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
    
        console.log(`o ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

let heroi1 = new heroi('Mago Negro', 25, 'mago');
heroi1.atacar();

let heroi2 = new heroi('Guerreiro do Fogo', 30, 'guerreiro');
heroi2.atacar();

let heroi3 = new heroi('Monge Coin', 98, 'monge');
heroi3.atacar();

let heroi4 = new heroi('Naruto Ninja', 18, 'ninja');
heroi4.atacar();

