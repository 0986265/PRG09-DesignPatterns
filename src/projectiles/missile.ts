import { Enemy } from "../enemy.js";
import { Game } from "../game.js";
import { GameObject } from "../gameobject.js";
import { Tank }         from "../tank.js";
import { Projectile }   from "./projectile.js";



export class Missile extends Projectile {
    
    private enemys               : Enemy[]
    private enemy               : Enemy

    constructor(tank : Tank, game : Game) {
        super("missile", tank)

        this.enemys = game.gameObjects.filter(o => (o instanceof Enemy)) as Enemy[]
        this.enemy = this.enemys[this.getRandomInt(this.enemys.length)]


    }

    public update(): void {
        this.position = this.position.add(this.position.getDirectionToObject(this.enemy).scale(this.speed = 1))
        this.rotation = this.position.getDirectionToObject(this.enemy).angle()
        super.update()
    }

    private getRandomInt(max : number) {
        return Math.floor(Math.random() * max);
      }

}