import { Component, OnInit } from '@angular/core';
import { Empleado } from "./empleado";

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  public title = "Bienvenido Empleado";
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public empleadoExter:Empleado;
  public trabajadorExterno:boolean;
  public color:string;
  public color_seleccionado:string;

  constructor() { 
    this.empleado=new Empleado("samuel",25,"programador",true);
    this.trabajadores=[new Empleado("pepe",25,"jefe",true),new Empleado("sara",25,"secretaria",true)];
    this.empleadoExter=new Empleado("juan",25,"informatico",true);
    this.trabajadorExterno=true;
    this.color = 'blue';
    this.color_seleccionado='#ccc';
  }

  cambiarExterno(valor:boolean){
    this.trabajadorExterno=valor;
  }
  ngOnInit(): void {
  }

}
