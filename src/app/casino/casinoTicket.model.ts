export class CasinoTicket {
    constructor(
        public id: number,
        public isVIP: boolean,
        public casinoId: number,
        public playerId: number,
        public created_at: Date
    ) {}
}