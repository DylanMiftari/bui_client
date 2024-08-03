import { CasinoLevel } from "../model/companylevel/casinolevel.model";

export class Casino {
    constructor(
        public id: number,
        public ticketPrice: number,
        public VIPTicketPrice: number,
        public level: number,
        public created_at: Date,
        public casinolevel: CasinoLevel | undefined
    ) {}
}