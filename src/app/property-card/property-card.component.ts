import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PropertyCardComponent implements OnInit {
  @Input() advertisement;

  constructor() { }

  ngOnInit() {
  }

}
