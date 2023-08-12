import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";



@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,

  ],
  exports : [
    HeroComponent,
    ListComponent,
  ],
  imports: [ // en los imports siempre van los mudules
  CommonModule //se importa este ahuevo en nuestro module para poder usar ngif, ngfor etc
  ]
})
export class HeroesModule{}
