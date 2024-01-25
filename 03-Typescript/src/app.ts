import { findHeroById } from "./services/hero.service"


const hero = findHeroById( 7 )

console.log(hero?.name ?? 'No hero found') 