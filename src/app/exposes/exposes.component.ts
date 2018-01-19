import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Advertisement, AdvertisementsService } from '../shared/services/advertisements.service';

@Component({
  selector: 'app-exposes',
  templateUrl: 'exposes.component.html',
  styleUrls: ['exposes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExposesComponent implements OnInit {
  @Input() advertisements;

  public advertisementsData: Advertisement = null;

  constructor(
    private _advertisementsService: AdvertisementsService
  ) { }

  ngOnInit() {
    this._advertisementsService
      .getAdvertisements()
      .subscribe((data: Advertisement) => {
        this.advertisementsData = <Advertisement>data;
        console.log(this.advertisementsData);
      });
  }

}
