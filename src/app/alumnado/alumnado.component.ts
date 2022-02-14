import { Component, OnInit } from '@angular/core';
import { AlumnadoDAW } from './alumnado';

@Component({
  selector: 'app-alumnado-daw',
  templateUrl: './alumnado.component.html',
  styleUrls: ['./alumnado.component.css']
})
export class AlumnadoDAWComponent implements OnInit {
  public titulo:string = "Listado Daw"
  public alumnos:Array<AlumnadoDAW>;

  constructor() { 

    this.alumnos=[new AlumnadoDAW("Samuel","Rivera","45689231f",new Date("1986-03-28"),"Sevilla", 123456789,2,["dwc","dws","dwi"]),
                  new AlumnadoDAW("Juan","Gonzalez","48963911s",new Date("1989-05-02"),"Sevilla", 123456789,2,["dwc","dwi"]),
                  new AlumnadoDAW("David","Fernandez","12458965s",new Date("1865-10-05"),"Madrid", 123456789,1,["Programacion"]),
                  new AlumnadoDAW("Pepe","Gamez","478596321g",new Date("2005-15-05"),"Cadiz", 123456789,1,["Programacion"])]
  }

  public mostrarPrimero(): AlumnadoDAW[]{
    var alumnosPrimero:Array<AlumnadoDAW>=[];
    var z=0;
    for (let i = 0; i < this.alumnos.length; i++) {
      if (this.alumnos[i].curso==1) {
        alumnosPrimero[z]=this.alumnos[i];
        z++
      }
    }
    return alumnosPrimero;
  }

  public mostrarSegundo(): AlumnadoDAW[]{
    var alumnosSegundo:Array<AlumnadoDAW>=[];
    var z=0;
    for (let i = 0; i < this.alumnos.length; i++) {
      if (this.alumnos[i].curso==2) {
        alumnosSegundo[z]=this.alumnos[i];
        z++;
      }
    }
    return alumnosSegundo;
  }
  
  /* Component */
  public isShownPrimero: boolean | undefined;
  public isShownSegundo: boolean | undefined;

ngOnInit(){
  this.isShownPrimero = false; //hidden every time subscribe detects change
}

toggleShowPrimero() {
  this.isShownPrimero = ! this.isShownPrimero;
}
toggleShowSegundo() {
  this.isShownSegundo = ! this.isShownSegundo;
}
}
