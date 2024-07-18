export class CasinoLevel {
    constructor(
        public nbMaxTicket: number,
        public nbMaxVIPTicket: number,
        public maxTicketPrice: number,
        public maxVIPTicketPrice: number,
        public maxSuiteRent: number,
        public nbMaxSuite: number,
        public rouletteMaxBet: number,
        public rouletteMaxVIPBet: number,
        public rouletteMaxUltraVIPBet: number,
        public diceMaxBet: number,
        public diceMaxVIPBet: number,
        public diceMaxUltraVIPBet: number,
        public pokerMaxBet: number,
        public pokerMaxVIPBet: number,
        public pokerMaxUltraVIPBet: number,
        public blackJackMaxBet: number,
        public blackJackMaxVIPBet: number,
        public blackJackMaxUltraVIPBet: number,
        public oulette2MaxBet: number,
        public roulette2MaxVIPBet: number,
        public roulette2MaxUltraVIPBet: number
    ) {}
}