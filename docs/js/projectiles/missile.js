import { Enemy } from "../enemy.js";
import { Projectile } from "./projectile.js";
export class Missile extends Projectile {
    constructor(tank, game) {
        super("missile", tank);
        this.enemys = game.gameObjects.filter(o => (o instanceof Enemy));
        this.enemy = this.enemys[this.getRandomInt(this.enemys.length)];
    }
    update() {
        this.position = this.position.add(this.position.getDirectionToObject(this.enemy).scale(this.speed = 1));
        this.rotation = this.position.getDirectionToObject(this.enemy).angle();
        super.update();
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}
