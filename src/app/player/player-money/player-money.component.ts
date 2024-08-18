import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-money',
  templateUrl: './player-money.component.html',
  styleUrl: './player-money.component.css'
})
export class PlayerMoneyComponent {
  @Input() money: number | undefined;
  @Input() max: number | null = null;
}
