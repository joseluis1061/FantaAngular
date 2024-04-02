import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsideRoutingModule } from './webside-routing.module';
import { SectionOneComponent } from './page/section-one/section-one.component';
import { SectionTwoComponent } from './page/section-two/section-two.component';
import { SectionThreeComponent } from './page/section-three/section-three.component';
import { LayoutComponent } from './page/layout/layout.component';
import { HeaderComponent } from '../shared/componets/header/header.component';
import { FooterComponent } from '../shared/componets/footer/footer.component';
import { PromotionalComponent } from './page/promotional/promotional.component';
import { VideoSizeComponent } from '../shared/componets/video-size/video-size.component';

@NgModule({
  declarations: [
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    LayoutComponent,
    PromotionalComponent,
  ],
  imports: [
    CommonModule,
    WebsideRoutingModule,
    HeaderComponent,
    FooterComponent,
    VideoSizeComponent
  ]
})
export class WebsideModule { }
