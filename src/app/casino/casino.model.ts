import { CasinoLevel } from "../model/companylevel/casinolevel.model";

export class Casino {
    constructor(
        public id: number,
        public ticketPrice: number,
        public VIPTicketPrice: number,
        public level: number,
        public created_at: Date,
        public casinolevel: CasinoLevel | undefined,
        public ticketCount: number | undefined,
        public VIPTicketCount: number | undefined,

        public rouletteMaxBet: number,
        public rouletteMaxVIPBet: number,
        public rouletteSequenceMultiplicator: number,
        public rouletteVIPSequenceMultiplicator: number,
        public rouletteTripletMultiplcator: number,
        public rouletteVIPTripletMultiplcator: number,
        public rouletteTripleSeventMultiplicator: number,
        public rouletteVIPTripleSeventMultiplicator: number,

        public diceGoal: number,
        public diceWinMultiplicator: number,
        public diceMaxBet: number,
        public diceVIPGoal: number,
        public diceVIPWinMultiplicator: number,
        public diceVIPMaxBet: number,
    ) {}
}