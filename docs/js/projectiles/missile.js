import { Enemy } from "../enemy.js";
import { Projectile } from "./projectile.js";
export class Missile extends Projectile {
    constructor(tank, game) {
        super("missile", tank);
        this.enemy = game.gameObjects.filter(o => (o instanceof Enemy));
    }
    update() {
        this.position = this.position.add(this.position.getDirectionToObject(this.enemy[2]).scale(this.speed = 1));
        this.rotation = this.position.getDirectionToObject(this.enemy[2]).angle();
        super.update();
    }
}
