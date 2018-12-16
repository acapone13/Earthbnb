import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';

import { CamelizePipe } from 'ngx-pipes';

import { MapService } from './map.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyATtl_UNm9Ttzuo1wrP0jODck3kesdGPWY'
    }),
    CommonModule
  ],
  providers: [
    MapService,
    CamelizePipe
  ],
  
})
export class MapModule { }