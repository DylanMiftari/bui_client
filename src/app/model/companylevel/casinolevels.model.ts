import { CasinoLevel } from "./casinolevel.model";

export class CasinoLevels {
    constructor(
        public l1: CasinoLevel,
        public l2: CasinoLevel,
        public l3: CasinoLevel,
        public l4: CasinoLevel,
        public l5: CasinoLevel,
        public l6: CasinoLevel,
    ) {}
}