import { City } from "./city/city.model";
import { Company } from "./company/company.model";
import { Home } from "./home/home.model";
import { Mine } from "./mine/mine.model";
import { Player } from "./player/player.model";

export class AppData {
    constructor(
        public player: Player,
        public companies: Array<Company>,
        public has_full_companies: boolean,
        public mines: Array<Mine>,
        public has_full_mines: boolean,
        public city: City,
        public homes: Array<Home>,
        public total_money: number
    ) {}
}