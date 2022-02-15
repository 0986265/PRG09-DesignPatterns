import { Projectile } from "../projectiles/projectile";
import { Tank } from "../tank";


declare global {
    interface Weapon {
        shoot(tank : Tank): Projectile
    }
}