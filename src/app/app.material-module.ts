import { NgModule } from '@angular/core';
import { MatCardModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatProgressSpinnerModule],
  exports: [MatCardModule, MatProgressSpinnerModule],
})
export class AngularMaterialModule { }
