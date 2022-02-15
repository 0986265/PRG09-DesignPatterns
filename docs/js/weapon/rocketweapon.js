import { Rocket } from "../projectiles/rocket.js";
export class RocketWeapon {
    shoot(tank) {
        return new Rocket(tank);
    }
}
