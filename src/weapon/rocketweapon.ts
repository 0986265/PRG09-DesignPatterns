import { Projectile } from "../projectiles/projectile"
import { Rocket } from "../projectiles/rocket.js"
import { Tank } from "../tank"

export class RocketWeapon {

    public fireRate : number = 2000;

    public shoot(tank : Tank): Projectile {
        return new Rocket(tank)
    }

    public getFireRate(): number {
        return this.fireRate
     }
}