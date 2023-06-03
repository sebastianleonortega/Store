import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ventas } from '../interface/ventas';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  private Api="http://localhost:3000/"

  constructor(
    private http: HttpClient
  ) { }

    public getAllVentas():Observable<Ventas[]>{
      return this.http.get<Ventas[]>(this.Api+"ventas")
    }

}
