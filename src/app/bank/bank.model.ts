import { BankLevel } from "../model/companylevel/banklevel.model";

export class Bank {
    constructor(
        public id: number,
        public accountMaintenanceCost: number,
        public transferCost: number,
        public maxAccountMoney: number,
        public maxAccountResource: number,
        public idCompany: number,
        public created_at: Date,
        public updated_at: Date,
        public level: number,
        public banklevel: BankLevel | undefined
    ) {}
}