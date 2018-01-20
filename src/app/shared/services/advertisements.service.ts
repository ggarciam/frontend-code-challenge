import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Globals } from './globals.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface AdvertisementAsset {
  titlePicture;
  advertisementThumbnails: {
    inventory_m: {
      url: string;
    };
  };
}

export interface AdvertisementPrice {
  baseRent: number;
  sellPrice: number;
}

export interface RealEstateSummary {
  address: {
    city: string;
    fullAddress: string;
    number: string;
    postalCode: string;
    street: string;
  };
  numberOfRooms: number;
  space: number;
}

export interface Advertisement {
  additionalId: number;
  advertisementAssets: Array<AdvertisementAsset>;
  advertisementPrice: AdvertisementPrice;
  hasFurniture: boolean;
  purpose: number;
  realestateSummary: RealEstateSummary;
  title: string;
}

export interface Advertisements {
  data: Advertisement[];
}

@Injectable()
export class AdvertisementsService {

  constructor(
    private _http: HttpClient,
    private _globals: Globals
  ) {}

  getAdvertisements(): Observable<Advertisement[]> {
    // get all the available advertisements
    //
    return this._http.get('https://cors-anywhere.herokuapp.com/' + this._globals.url)
      .map((res: Advertisements) => {
        return res.data.splice(0, this._globals.number_ads);
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    const errMsg: string = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    return Observable.throw(errMsg);
  }
}
