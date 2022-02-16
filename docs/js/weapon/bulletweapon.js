import { Bullet } from "../projectiles/bullet.js";
export class BulletWeapon {
    constructor() {
        this.fireRate = 500;
    }
    shoot(tank) {
        return new Bullet(tank);
    }
    getFireRate() {
        return this.fireRate;
    }
}
