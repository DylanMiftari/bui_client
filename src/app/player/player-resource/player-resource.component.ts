import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-resource',
  templateUrl: './player-resource.component.html',
  styleUrl: './player-resource.component.css'
})
export class PlayerResourceComponent {
  @Input() quantity: number | undefined;
}
