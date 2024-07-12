import { Company } from "./company/company.model";
import { Player } from "./player/player.model";

export class AppData {
    constructor(
        public player: Player,
        public companies: Array<Company>,
        public has_full_companies: boolean
    ) {}
}