import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';

export const pipes = [
  CapitalizePipe
];

@NgModule({
  declarations:[pipes],
  exports: [pipes]
})

export class PipesModule { }
