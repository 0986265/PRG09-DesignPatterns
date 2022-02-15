import { Missile } from "../projectiles/missile.js";
export class MissileWeapon {
    shoot(tank) {
        return new Missile(tank);
    }
}
