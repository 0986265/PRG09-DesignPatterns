import { Enemy } from "../enemy";
import { Game } from "../game";
import { Projectile } from "../projectiles/projectile";
import { Tank } from "../tank";


declare global {
    interface Weapon {
        shoot(tank : Tank, game : Game): Projectile
        getFireRate() : number
    }
}