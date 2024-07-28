export class City {
    constructor(
        public id: number,
        public name: string,
        public country: string,
        public maxLevelOfCorp: number,
        public weeklyTaxes: number,
        public weeklyCompanyTaxes: number,
        public rank: number,
        public nbEntreprises: number | undefined
    ) {}
}