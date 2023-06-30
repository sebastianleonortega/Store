import { Component, Input, OnInit } from '@angular/core';
import {ICarrusel} from '../interface/carrusel.interface';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {

  @Input() height = 500;
  @Input() isFullScreen = false;
  @Input() item : ICarrusel[] =[];

  public finalHeight: string| number = 0;
  public currentPosition = 0;

  constructor(){
    this.finalHeight = this.isFullScreen ? '100vh' :  `${this.height}px` ;
  }

  ngOnInit(){
    this.item.map((i, index ) => {
      i.id = index;
      i.marginLeft = 0 ;
    })

  }

  setCurrentPositon(position: number){
    this.currentPosition = position;
    this.item.find(i => i.id === 0)!.marginLeft = -100 * position;
  }

  setNext(){
    let finalPercentage = 0 ;
    let nextPosition = this.currentPosition +1 ;
    if (nextPosition <= this.item.length -1) {
      finalPercentage = -100 * nextPosition;
    }else {
      nextPosition = 0;
    }
    this.item.find(i => i.id === 0)!.marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }

  setBack(){
    let finalPercentage = 0;
    let backPosition = this.currentPosition -1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.item.length -1;
      finalPercentage = -100 * backPosition;
    }
    this.item.find(i => i.id === 0)!.marginLeft = finalPercentage;
    this.currentPosition = backPosition;
  }

}

