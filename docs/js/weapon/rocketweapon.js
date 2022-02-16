import { Rocket } from "../projectiles/rocket.js";
export class RocketWeapon {
    constructor() {
        this.fireRate = 2000;
    }
    shoot(tank) {
        return new Rocket(tank);
    }
    getFireRate() {
        return this.fireRate;
    }
}
