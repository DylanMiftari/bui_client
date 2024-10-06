import { Player } from "../player/player.model";

export class CreditRequest {
    constructor(
        public id: number,
        public status: string,
        public money: number,
        public rate: number | null,
        public playerId: number,
        public bankId: number,
        public created_at: Date,
        public updated_at: Date,
        public description: string,
        public weeklypayment: number,
        public player: Player | undefined
    ) {}
}