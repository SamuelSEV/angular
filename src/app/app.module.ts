import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { AlumnadoDAWComponent } from './alumnado/alumnado.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CocheComponent } from './coche/coche.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    AlumnadoDAWComponent,
    HomeComponent,
    ContactoComponent,
    CocheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

