import { houseType } from "./houseType.model";

export class House {
    constructor(
        public id: number,
        public created_at: Date,
        public updated_at: Date,
        public houseTypeId: number,
        public estateAgencyId: number | null,
        public city_id: number,
        public house_type: houseType | undefined,
    ) {}
}