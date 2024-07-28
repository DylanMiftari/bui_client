import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TravelService } from './travel.service';
import { AppDataService } from '../app-data.service';

export const travelGuard: CanActivateFn = (route, state) => {
  const travelService = inject(TravelService);
  const router = inject(Router);

  if(!travelService.verify()) {
    router.navigate(["intravel"]);
    return false;
  }
  return true;
};
