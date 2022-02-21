import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { RopaService } from '../servicios/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {
  public ropa: Array<string>; 
  public prenda:string
  constructor(private _ropaService: RopaService) {
    this.ropa=[];
    this.prenda="";
  }

  ngOnInit(): void {
    this.obtener();
  }

  obtener(): void{
    this.ropa=this._ropaService.getRopa();
  }

  mostrar(): Array<string>{
    return this.ropa;
  }

  anadirRopa(): void{
    this._ropaService.addRopa(this.prenda)
  }

  eliminarRopa(): void{
    this._ropaService.deleteRopa(this._ropaService.getIndex(this.prenda));
  }

  borrarRopaIndex(ropa:string){
    this._ropaService.deleteRopa(this._ropaService.getIndex(ropa));
  }

}
