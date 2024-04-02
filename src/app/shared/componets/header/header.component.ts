import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ProductsService } from '../../services/products.service';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  activeMenu = false;
  countProduct = 0;
  products: Product[] = [];
  countProducts: number = 0;
  private subs$ !: Subscription;

  constructor (
    @Inject(DOCUMENT) private document: Document,
    private productsService: ProductsService
  ) {}
  ngOnInit(): void{
    this.productsService.cart$
      .subscribe(data => {
        this.products = data;
        this.countProduct = this.products.length;
      })
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

  ngOnDestroy(): void {
    this.subs$.unsubscribe()
  }
}
