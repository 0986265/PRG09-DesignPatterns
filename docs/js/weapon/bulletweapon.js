import { Bullet } from "../projectiles/bullet";
export class BulletWeapon {
    shoot(tank) {
        return new Bullet(tank);
    }
}
