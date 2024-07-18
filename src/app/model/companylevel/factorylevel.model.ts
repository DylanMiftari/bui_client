export class FactoryLevel {
    constructor(
        public nbMachine: number,
        public nbSellSlot: number,
        public quantityPerSlot: number,
        public warehouseCapacity: number,
        public distanceSellingMultiplicator: number
    ) {}
}