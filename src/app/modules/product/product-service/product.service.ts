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
  public saveProduct():Observable<InterfaceProduct[]>{
    return this.http.get<InterfaceProduct[]>(this.Api+"save/");
  }
  public  getProductById(idProduct : string):Observable<InterfaceProduct[]>{
    return this.http.get<InterfaceProduct[]>(this.Api+ idProduct);
  }
  public updateProduct(id: string, product: InterfaceProduct[]): Observable<InterfaceProduct[]>{
    return this.http.put<InterfaceProduct[]>(this.Api + id, product);
  }
  public deleteProduct(idProduct: string):Observable<InterfaceProduct[]>{
    return this.http.delete<InterfaceProduct[]>(this.Api+idProduct);
  }
  public getAllCategory():Observable<any>{
    return this.http.get(this.Api+"");
  }

}
