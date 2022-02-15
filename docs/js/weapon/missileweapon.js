import { Missile } from "../projectiles/missile";
export class MissileWeapon {
    shoot(tank) {
        return new Missile(tank);
    }
}
