import { EstateLevel } from "./estatelevel.model";

export class EstateLevels {
    constructor(
        public l1: EstateLevel,
        public l2: EstateLevel,
        public l3: EstateLevel,
        public l4: EstateLevel,
        public l5: EstateLevel,
        public l6: EstateLevel,
    ) {}
}