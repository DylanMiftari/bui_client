import { CompanyLevel } from "./company/comanylevel.model";
import { BankLevels } from "./model/companylevel/banklevels.model";
import { CasinoLevels } from "./model/companylevel/casinolevels.model";
import { EstateLevels } from "./model/companylevel/estatelevels.model";
import { FactoryLevels } from "./model/companylevel/factorylevels.model";
import { MafiaLevels } from "./model/companylevel/mafialevels.model";
import { SecurityLevels } from "./model/companylevel/securitylevels.model";
import { MineLevel } from "./model/minelevel.model";
import { SecurityConfig } from "./security-config.model";

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
        public change_city_cost: number,
        public default_travel_time: number,
        public travel_tier_multiplicator: number,
        public companylevels: Array<CompanyLevel>,

        public cyberattack_min_target_level: number,
        public cyberattack_cost: number,
        public cyberattack_chance: number,
        public cyberattack_money_robed: number,

        public ai_drone_house_cost: number,
        public ai_drone_house_chance: number,
        public ai_drone_house_min_robed_quantity: number,
        public ai_drone_house_max_robed_quantity: number,
        public ai_drone_house_min_target_money: number,
        public ai_drone_player_cost: number,
        public ai_drone_player_chance: number,
        public ai_drone_player_min_robed_quantity: number,
        public ai_drone_player_max_robed_quantity: number,
        public ai_drone_player_min_target_money: number,

        public shoplifting_cost: number,
        public shoplifting_chance: number,
        public shoplifting_base_robed_money_min: number,
        public shoplifting_base_robed_money_max: number,

        public phishing_min_target_money: number,
        public phishing_cost: number,
        public phishing_chance: number,
        public phishing_robed_quantity: number,

        public estate_robot_increase_price: number,
        public estate_robot_decrease_duration: number,
        public estate_robot_2_increase_price: number,
        public estate_robot_2_decrease_duration: number,

        public security: SecurityConfig,
    ) {}
}