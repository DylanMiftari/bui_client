export class BankAccountTransaction {
    constructor(
        public id: number,
        public money: number,
        public description: string,
        public created_at: Date,
        public transfert_cost: number
    ) {}
}