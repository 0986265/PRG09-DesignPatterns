import { Projectile } from "../projectiles/projectile"
import { Rocket } from "../projectiles/rocket.js"
import { Tank } from "../tank"

export class RocketWeapon {
    public shoot(tank : Tank): Projectile {
        return new Rocket(tank)
    }
}