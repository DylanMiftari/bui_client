import { Player } from "../player/player.model";
import { bankResourceAccount } from "./bankResourceAccount.model";

export class BankAccount {
    constructor(
        public id: number,
        public accountMaintenanceCost: number,
        public transferCost: number,
        public money: number,
        public maxMoney: number,
        public maxResource: number,
        public created_at: number,
        public player: Player | undefined,
        public bank_resource_account: Array<bankResourceAccount> | undefined
    ) {}
}