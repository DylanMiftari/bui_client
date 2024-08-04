export class SecurityConfig {
    constructor(
        public house_alarm_decrease_chance: number,
        public house_alarm_decrease_robed_quantity_min: number,
        public house_alarm_decrease_robed_quantity_max: number,
        public company_alarm_decrease_chance: number,
        public company_alarm_decrease_robed_quantity_min: number,
        public company_alarm_decrease_robed_quantity_max: number,

        public pepper_spray_decrease_chance: number,
        public pepper_spray_decrease_robed_quantity: number,

        public bank_gas_dispenser_decrease_robed_quantity: number,
        public bank_gas_dispenser_gas_per_use: number,
        public company_gas_dispenser_decrease_robed_quantity: number,
        public company_gas_dispenser_gas_per_use: number,

        public reinforced_door_chance_divider: number,

        public house_bodyguard_chance_divider: number,
        public house_bodyguard_duration: number,
        public player_bodyguard_chance_divider: number,
        public player_bodyguard_duration: number,

        public bank_security_guard_max_member: number,
        public bank_security_guard_duration: number,
        public bank_security_guard_first_members_count: number,
        public bank_security_guard_first_decrease_chance: number,
        public bank_security_guard_second_decrease_chance: number,
        public bank_security_guard_first_decrease_robed_quantity: number,
        public bank_security_guard_second_decrease_robed_quantity: number,

        public company_security_guard_max_member: number,
        public company_security_guard_duration: number,
        public company_security_guard_first_members_count: number,
        public company_security_guard_first_decrease_chance: number,
        public company_security_guard_second_decrease_chance: number,
        public company_security_guard_first_decrease_robed_quantity: number,
        public company_security_guard_second_decrease_robed_quantity: number,

        public cyberdefense_cyberattack_chance: number,
        public company_cyberdefense_duration: number,
        public cyberdefense_phishing_chance: number,
        public bank_cyberdefense_duration: number,

        public house_anti_ai_ai_drone_rob_chance: number,
        public player_anti_ai_ai_drone_rob_chance: number,

        public bank_containment_rob_chance: number,
        public bank_containment_compensation_cost: number,
        public company_containment_rob_chance: number,
        public company_containment_compensation_cost: number,
    ) {}
}