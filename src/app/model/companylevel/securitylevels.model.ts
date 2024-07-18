import { SecurityLevel } from "./securitylevel.model";

export class SecurityLevels {
    constructor(
        public l1: SecurityLevel,
        public l2: SecurityLevel,
        public l3: SecurityLevel,
        public l4: SecurityLevel,
        public l5: SecurityLevel,
        public l6: SecurityLevel,
    ) {}
}