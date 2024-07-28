import { Player } from "../player/player.model";

export class Company {
    constructor(
        public id: number,
        public name: string,
        public money_in_safe: number,
        public id_player: number,
        public created_at: Date,
        public updated_at: Date,
        public companylevel: number,
        public company_type: string,
        public user: Player | undefined
    ) {}
}