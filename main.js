function Pokemon(name, type, stamina, strength) {
    this.name = name;
    this.type = type;
    this.stamina = stamina;
    this.strength = strength;
    this.pokemonPoints = this.stamina * this.strength;
    let _attackDamage = this.stamina + this.strength;
    this.skill = function() {
        console.log("Ataque pokemon")
    }    

    this.getDamage = function() {
        return _attackDamage;
    }

    this.setDamage = function(value) {
        if(typeof value === 'number') {
            _attackDamage = value
        }
    }

    this.increase = function() {
        const increaseAttack = this.getDamage() * 1.5;
        if("evolucao" in this) {    
            console.log("Leila")     
            this.setDamage(increaseAttack)
        }
    }
}

function Pichu(nome, stamina, strength) {                    
    Pokemon.call(this, nome, "Elétrico", stamina, strength);
    this.skill = function() {                                 
        console.log("Choque do trovão");
    }
}

function Pikachu(nome, stamina, strength) {
    this.evolucao = 1;
    Pichu.call(this, nome, stamina, strength);
    this.skill = function() {                                 
        console.log("Relâmpago");
    }
}

function Raichu(nome, stamina, strength) {
    Pikachu.call(this, nome, stamina, strength);
    this.skill = function() {
        console.log("Explosão da lua")
    }
    this.evolucao = 2;

    this.increase = function() {
        const increaseAttack = this.getDamage() * 2;
        if(this.evolucao === 2) {
            console.log("Lopes")
            this.setDamage(increaseAttack)
        }
    }

}



const pichuDoKilson = new Pichu("Pichu", 100, 200);
const pikachuDoKilson = new Pikachu("Pikachu", 200, 300);
const raichuDoKilson = new Raichu("Raichu", 300, 400)

raichuDoKilson.increase()
console.log(raichuDoKilson);