import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  public min_banklevel_for_credit: number = 2;
  public min_casinolevel_vip: number = 3;
  public casino_ticket_expired_after_days: number = 7;
  public casino_level_for_roulette: number = 1;
}
