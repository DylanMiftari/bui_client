export class Resource {
    constructor(
        public id: number,
        public name: string,
        public marketPrice: number,
        public levelToMine: number,
        public timeToMine: number,
        public mineQuantity: number,
    ) {}
}