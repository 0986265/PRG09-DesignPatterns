import { Projectile } from "./projectile.js";
export class Bullet extends Projectile {
    constructor(tank) {
        super("bullet", tank);
    }
    update() {
        super.moveStraight();
        super.update();
    }
}
