import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InterfaceProduct} from "@modules/product/Interface/InterfaceProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private Api = 'http://localhost:8090/market/product/';

  constructor(private http: HttpClient) {
  }

  public getAllProduct():Observable<InterfaceProduct[]>{
    return this.http.get<InterfaceProduct[]>(this.Api+"all");
  }
}
