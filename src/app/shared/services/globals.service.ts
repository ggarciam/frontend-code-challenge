import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface IEnvironmentData {
  production: boolean;
  url: string;
  number_ads: number;
}

export class CEnvironmentData implements IEnvironmentData {
  production: boolean;
  url: string;
  number_ads: number;
}

@Injectable()
export class Globals {
  private _globals: any;

  constructor() {
    this._globals = <CEnvironmentData>environment;
  }

  get url(): string { return this._globals.url; }
  get number_ads(): number { return this._globals.number_ads; }

}
