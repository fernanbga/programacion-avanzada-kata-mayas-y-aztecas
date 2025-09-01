// Clase normal Warrior
class Warrior {
  constructor(life, power) {
    this.life = life;
    this.power = power;
  }

  attack() {
    return this.power;
  }

  defend(damage) {
    this.life -= damage;
    console.log(`${this.constructor.name} tiene ${this.life} de vida restante`);
  }
}

// Clase Maya que hereda Warrior
class Maya extends Warrior {
  constructor(life, power) {
    super(life, power);
  }

  drinkColaCao() {
    this.power += 10;
    console.log(`Maya bebe Cola Cao, ahora tiene ${this.power} de poder`);
  }
}

// Clase Aztec que hereda Warrior
class Aztec extends Warrior {
  constructor(life, power) {
    super(life, power);
  }

  drinkNesquik() {
    this.life += 10;
    console.log(`Azteca bebe Nesquik, ahora tiene ${this.life} de vida`);
  }
}

//Simulacion
const aztec = new Aztec(100, 20);
const maya = new Maya(100, 20);

//Azteca bebe Nesquik
aztec.drinkNesquik();

//Maya bebe Cola Cao
maya.drinkColaCao();

// Maya ataca a Azteca. Azteca defiende.
const damageMaya = maya.attack();
console.log(`Maya ataca con ${damageMaya} de poder`);
aztec.defend(damageMaya);

// Azteca ataca a Maya. Maya defiende.
const damageAztec = aztec.attack();
console.log(`Azteca ataca con ${damageAztec} de poder`);
maya.defend(damageAztec);