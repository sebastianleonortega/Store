import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {InterfaceProduct} from "@modules/product/Interface/InterfaceProduct";
import {ProductService} from "@modules/product/product-service/product.service";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit{
  productAddForm: FormGroup = new FormGroup({
    productName: new FormControl(null, [Validators.required]),
    idCategory: new FormControl(null, [Validators.required]),
    barCode: new FormControl(null, [Validators.required]),
    priceSale: new FormControl(null, [Validators.required]),
    quantityStock: new FormControl(null, [Validators.required]),
    state: new FormControl(null, [Validators.required]),
  });

  private product?: InterfaceProduct[];
  private category: any;

  constructor(
    private productService: ProductService,
  ) {
  }

  ngOnInit() {
  }

  getAllCategory(){
    this.productService.getAllCategory().subscribe({
      next: (r)=> {
        r = this.category;
      }
    })
  }
}
