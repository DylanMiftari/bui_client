import { Casino } from "./casino.model";
import { CasinoTicket } from "./casinoTicket.model";

export class CasinoClient {
    constructor(
        public casino: Casino,
        public ticket: CasinoTicket
    ) {}
}