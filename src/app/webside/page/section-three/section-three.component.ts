import { Component } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent {

  constructor (
    private productsService: ProductsService
  ) {}

  addProduct(item: Product){
    this.productsService.addProductCart(item)
  }

}
