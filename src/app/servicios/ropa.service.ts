import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
  public nombre:string = "Pantalon";
  public coleccionRopa = ['Pantalones blancos', 'Camisa Roja'];
  prueba() {
    return this.nombre;
  }
  getRopa(): Array<string>{
    return this.coleccionRopa;
  }
  addRopa(nombrePrenda:string): Array<string>{
    this.coleccionRopa.push(nombrePrenda);
    return this.getRopa();
  }
  deleteRopa(index:number){
    this.coleccionRopa.splice(index,1);
  }
}
