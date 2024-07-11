export class Player {
    constructor(
      public id: number,
      public pseudo: string,
      public city_id: number,
      public playerMoney: number,
      public created_at: Date
    ) {}
  }