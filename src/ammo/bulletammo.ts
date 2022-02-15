import { GameObject }       from "../gameobject.js";
import { Bullet } from "../projectiles/bullet.js";
import { Tank } from "../tank.js";
import { Vector }           from "../vector.js";
import { Ammunition }       from "./ammunition.js";

export class BulletAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-bullet", position)
    }

    public onCollision(target: GameObject): void {
        if(target instanceof Tank) {
            target.setProjectile(new Bullet(target))
        }
    }
}