export class Player {
  name;
  level;
  xp;
  constructor(name, level, xp) {
      this.name=name;
      this.level=level;
      this.xp=xp;
    }
  info(){
    return `${this.name} has reached level ${this.level}`
  }
  levelup(){
    this.level++;
    return `El nuevo nivel de ${this.name} es ${this.level}`
  }
  raisexp(){
        this.xp+=10;
        return this.raiseLvl();
    }
  raiseLvl(){
         if (this.xp>=100){
            this.level++;
            this.px -=100;
            return `${this.name} ha alcanzado ${this.xp} de experiencia y subio de nivel, ahora es nivel ${this.level}`;
         }else{
            return `${this.name} tiene ${this.xp} y aun no es suficiente para subir de nivel`;
         }
       
    }
  
  }
const player1 = new Player("Tara",6, 90);
const player2 = new Player("Carlos",7, 100);
const player3 = new Player("Gael",8, 50);
console.log(player1.info());
console.log(player1.levelup());
for(let i=0; i<6; i++){
    console.log(player1.raisexp());
    
}
let players=[];
players.push(player1);
players.push(player2);
players.push(player3);
console.log(players);



