import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsideRoutingModule } from './webside-routing.module';
import { SectionOneComponent } from './page/section-one/section-one.component';
import { SectionTwoComponent } from './page/section-two/section-two.component';
import { SectionThreeComponent } from './page/section-three/section-three.component';
import { LayoutComponent } from './page/layout/layout.component';
import { HeaderComponent } from '../shared/header/header.component';
import { AnimateComponent } from './component/animate/animate.component';

@NgModule({
  declarations: [
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    LayoutComponent,
    AnimateComponent
  ],
  imports: [
    CommonModule,
    WebsideRoutingModule,
    HeaderComponent
  ]
})
export class WebsideModule { }
