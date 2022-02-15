import { Bullet } from "../projectiles/bullet.js";
export class BulletWeapon {
    shoot(tank) {
        return new Bullet(tank);
    }
}
