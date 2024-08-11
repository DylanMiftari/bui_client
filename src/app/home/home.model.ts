import { House } from "./house.model";

export class Home {
    constructor(
        public id: number,
        public id_house: number,
        public id_player: number,
        public moneyInSafe: number,
        public renterId: number | null,
        public rent: number,
        public house: House | undefined,
    ) {}
}