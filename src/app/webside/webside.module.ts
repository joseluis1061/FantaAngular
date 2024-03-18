import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsideRoutingModule } from './webside-routing.module';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionThreeComponent } from './section-three/section-three.component';


@NgModule({
  declarations: [
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent
  ],
  imports: [
    CommonModule,
    WebsideRoutingModule
  ]
})
export class WebsideModule { }
