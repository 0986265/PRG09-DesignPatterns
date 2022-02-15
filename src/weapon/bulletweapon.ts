import { Bullet } from "../projectiles/bullet"
import { Projectile } from "../projectiles/projectile"
import { Tank } from "../tank"

export class BulletWeapon implements Weapon{
    public shoot(tank : Tank): Projectile {
        return new Bullet(tank)
    }
}