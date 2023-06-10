import {Component, OnInit} from '@angular/core';
import {InterfaceProduct} from '@modules/product/Interface/InterfaceProduct';
import {ProductService} from "@modules/product/product-service/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements  OnInit{

  product: InterfaceProduct[]=[];

  constructor(
    private productService: ProductService,
  ) {
  }

ngOnInit() {
}

getProduct(){
    this.productService.getAllProduct().subscribe({
      next: (r) => {
        this.product = r;
        console.log( "siu" +this.product);
      }
    })
}

}


