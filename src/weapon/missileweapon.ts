import { Bullet } from "../projectiles/bullet"
import { Missile } from "../projectiles/missile"
import { Projectile } from "../projectiles/projectile"
import { Tank } from "../tank"

export class MissileWeapon {
    public shoot(tank : Tank): Projectile {
        return new Missile(tank)
    }
}