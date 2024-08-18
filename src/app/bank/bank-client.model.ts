import { Bank } from "./bank.model";
import { BankAccount } from "./bankAccount.model";

export class BankClient {
    constructor(
        public bank: Bank,
        public account: BankAccount
    ) {}
}