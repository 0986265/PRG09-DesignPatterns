import { Missile } from "../projectiles/missile.js";
export class MissileWeapon {
    constructor() {
        this.fireRate = 5000;
    }
    shoot(tank, game) {
        return new Missile(tank, game);
    }
    getFireRate() {
        return this.fireRate;
    }
}
