import { Component, OnInit } from '@angular/core';
import { RopaService } from '../servicios/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {
  public titulo: string = "Pagina principal";
  public añadir_ropa:string;
  constructor(
    private _ropaservice: RopaService
    
  ) { this.añadir_ropa='pantalon';}

  ngOnInit(): void {
    console.log(this._ropaservice.prueba());
  }

}
