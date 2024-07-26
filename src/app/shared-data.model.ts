import { BankLevels } from "./model/companylevel/banklevels.model";
import { CasinoLevels } from "./model/companylevel/casinolevels.model";
import { EstateLevels } from "./model/companylevel/estatelevels.model";
import { FactoryLevels } from "./model/companylevel/factorylevels.model";
import { MafiaLevels } from "./model/companylevel/mafialevels.model";
import { SecurityLevels } from "./model/companylevel/securitylevels.model";
import { MineLevel } from "./model/minelevel.model";

export class SharedData {
    constructor(
        public maxCompaniesPerPlayer: number,
        public companyCreationPrice: number,
        public companyTypes: {"bank": string, "casino": string, "estate_agency": string, "factory": string, "mafia": string, "security": string},
        public banklevel: BankLevels,
        public casinolevel: CasinoLevels,
        public mafialevel: MafiaLevels,
        public estatelevel: EstateLevels,
        public factorylevel: FactoryLevels,
        public securitylevel: SecurityLevels,
        public new_mine_prices: Array<number>,
        public minelevel: Array<MineLevel>,
        public max_mine_level: number,
    ) {}
}