import { Missile } from "../projectiles/missile.js";
export class MissileWeapon {
    shoot(tank, game) {
        return new Missile(tank, game);
    }
}
