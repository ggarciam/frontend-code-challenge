import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Advertisement } from '../shared/services/advertisements.service';

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PropertyCardComponent {
  @Input() public advertisement: Advertisement;

  constructor() { }
}
