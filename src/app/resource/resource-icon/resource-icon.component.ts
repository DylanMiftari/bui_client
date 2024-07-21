import { Component, Input } from '@angular/core';
import { Resource } from '../resource.model';

@Component({
  selector: 'app-resource-icon',
  templateUrl: './resource-icon.component.html',
  styleUrl: './resource-icon.component.css'
})
export class ResourceIconComponent {
  @Input() resource: Resource | undefined;
  @Input() withText: boolean = false;
  @Input() cardStyle: boolean = false;
  @Input() allInfo: boolean = false;
}
