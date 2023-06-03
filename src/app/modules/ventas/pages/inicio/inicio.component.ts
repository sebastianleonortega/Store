import { Component, OnInit } from '@angular/core';
import { Ventas } from '@modules/ventas/interface/ventas';
import { VentasService } from '@modules/ventas/service/ventas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{

  ventas:any;

  constructor(
    private ventasService: VentasService,
  ){}
  ngOnInit(): void {
    this.getAllVentas();
  }

  getAllVentas (){
    this.ventasService.getAllVentas().subscribe({
      next: (r)=> {
        this.ventas = r;

      }
    })
  }

informationModal(){

}

}
