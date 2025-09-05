export class Player {
  name;
  level;
  constructor(name, level) {
      this.name=name;
      this.level=level;
    }
  info(){
    return `${this.name} has reached level ${this.level}`
  }
  
  }
const player1 = new Player("Tara",6);
console.log(player1.info());

  