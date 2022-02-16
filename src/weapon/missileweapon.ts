import { Enemy } from "../enemy"
import { Game } from "../game"
import { Bullet } from "../projectiles/bullet"
import { Missile } from "../projectiles/missile.js"
import { Projectile } from "../projectiles/projectile"
import { Tank } from "../tank"

export class MissileWeapon {
    public shoot(tank : Tank, game : Game): Projectile {
        return new Missile(tank, game)
    }
}