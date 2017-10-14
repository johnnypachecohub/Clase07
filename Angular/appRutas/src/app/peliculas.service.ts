import { Injectable } from '@angular/core';
import { Pelicula } from './compartido/pelicula'

@Injectable()
export class PeliculasService {
  private _peliculas: Array<Pelicula> = [
    new Pelicula("El Gladiador", "Un general que desafío a un imperio", 2005, "Acción", []),
    new Pelicula("El Perfume", "Un asesino obsesionado por obtener la esencia que domine al mundo", 2010, "Suspenso", []),
    new Pelicula("El Náufrago", "Basada en una historia real de un accidente aéreo", 2003, "Drama", [])
  ]

  peliculaSelecciona: Pelicula

  get peliculas(): Array<Pelicula> {
    return this._peliculas
  }

  agregarPelicula(pelicula: Pelicula) {
    this._peliculas.push(pelicula)
  } 

  constructor() { }

}
