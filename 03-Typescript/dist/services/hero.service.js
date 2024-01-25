"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHeroById = void 0;
const heros_1 = require("../data/heros");
const findHeroById = (id) => {
    return heros_1.heroes.find(hero => hero.id === id);
};
exports.findHeroById = findHeroById;
