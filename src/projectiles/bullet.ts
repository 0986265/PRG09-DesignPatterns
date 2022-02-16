import { Tank }         from "../tank.js";
import { Projectile }   from "./projectile.js";


export class Bullet extends Projectile {
    constructor(tank : Tank) {
        super("bullet", tank)
    }

    public update(): void {
        super.moveStraight()
        super.update()
    }

}