import { Enemy } from "../enemy.js";
import { Game } from "../game.js";
import { GameObject } from "../gameobject.js";
import { Tank }         from "../tank.js";
import { Projectile }   from "./projectile.js";



export class Missile extends Projectile {
    
    private enemy               : Enemy[]

    constructor(tank : Tank, game : Game) {
        super("missile", tank)

        this.enemy = game.gameObjects.filter(o => (o instanceof Enemy)) as Enemy[]

    }

    public update(): void {
        this.position = this.position.add(this.position.getDirectionToObject(this.enemy[2]).scale(this.speed = 1))
        this.rotation = this.position.getDirectionToObject(this.enemy[2]).angle()
        super.update()
    }
}