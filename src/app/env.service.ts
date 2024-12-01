import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  public min_banklevel_for_credit: number = 2;
  public min_casinolevel_vip: number = 3;
}
