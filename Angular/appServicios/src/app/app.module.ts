import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppServicio } from './app.servicio';
import { PeliculasService } from './peliculas.service';

import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormularioComponent } from './listado/formulario/formulario.component';
import { PeliculaComponent } from './listado/pelicula/pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleComponent,
    FormularioComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppServicio, PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
