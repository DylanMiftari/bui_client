export class SecurityLevel {
    constructor(
        public resourceSafeCapacity: number,
        public hasAlarm: boolean,
        public hasPepperSpray: boolean,
        public hasGasDispenser: boolean,
        public hasReinforcedDoor: boolean,
        public hasBodyGuard: boolean,
        public hasSecurityGuard: boolean,
        public hasCyberDefense: boolean,
        public hasAntiAISystem: boolean,
        public hasContainmentSystem: boolean,
        public distance_multiplicator: number
    ) {}
}