import { BankAccountTransaction } from "./bankAccountTransaction.model";

export class bankResourceAccount {
    constructor(
        public bankAccountId: number,
        public resourceId: number,
        public quantity: number,
    ) {}
}