import { Card } from "./card.model";

export class PokerResult {
    constructor(
        public res: Array<Card>,
        public gain: number,
        public hand: string,
        public pay: number,
    ) {}
}