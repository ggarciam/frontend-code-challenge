import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface IEnvironmentData {
  production: boolean;
  url: string;
}

export class CEnvironmentData implements IEnvironmentData {
  production: boolean;
  url: string;
}

@Injectable()
export class Globals {
  private _globals: any;

  constructor() {
    this._globals = <CEnvironmentData>environment;
  }

  get url(): string { return this._globals.url; }

}
