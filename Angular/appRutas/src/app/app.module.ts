import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AppServicio } from './app.servicio';
import { PeliculasService } from './peliculas.service';

import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PeliculaComponent } from './listado/pelicula/pelicula.component';
import { CabeceraComponent } from './compartido/cabecera/cabecera.component';

const rutas: Routes = [
  {path: "", component: ListadoComponent, pathMatch: "full"},
  {path: "agregar", component: FormularioComponent},
  {path: "detalle/:id", component: DetalleComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleComponent,
    FormularioComponent,
    PeliculaComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [AppServicio, PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
