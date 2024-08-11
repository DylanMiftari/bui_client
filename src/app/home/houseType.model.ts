export class houseType {
    constructor(
        public id: number,
        public typeName: string,
        public constructionDuration: number,
        public constructionCost: number,
        public maintenanceCost: number,
    ) {}
}