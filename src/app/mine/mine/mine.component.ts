import { Component, Input } from '@angular/core';
import { Mine } from '../mine.model';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css', "../../../assets/style/card.css"]
})
export class MineComponent {
  @Input() mine: Mine | undefined;
}
