import { BankLevel } from "./banklevel.model";

export class BankLevels {
    constructor(
        public l1: BankLevel,
        public l2: BankLevel,
        public l3: BankLevel,
        public l4: BankLevel,
        public l5: BankLevel,
        public l6: BankLevel,
    ) {}
}