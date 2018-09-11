import { Injectable, Inject } from '@angular/core';
import { IMatDemoConfig } from './mat-demo.interface';

@Injectable({
  providedIn: 'root'
})
export class MatDemoService {

  constructor(
    @Inject('config') private _config: IMatDemoConfig,
  ) { }

  get baseUrl() {
    return this._config.baseUrl;
  }
}

