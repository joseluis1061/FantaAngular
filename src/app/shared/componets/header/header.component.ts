import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeMenu = false;
  countProduct = 0;

  constructor (@Inject(DOCUMENT) private document: Document) {}
  ngOnInit(): void{

  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

  public goto(page: string) {
    this.document?.getElementById(page)?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    })
  }

  public gotoMobile = (page: string) => {
    this.document?.getElementById(page)?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });
    this.toggleMenu();
  }
}
