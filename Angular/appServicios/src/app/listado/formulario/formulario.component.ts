import { Component, OnInit } from '@angular/core';
import { PeliculasService} from '../../peliculas.service';
import { Pelicula } from '../../compartido/pelicula';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private peliculasServicio: PeliculasService) { }

  ngOnInit() {
  }

  agregar(titulo: string, sinopsis: string, anno: number, genero: string) {
    this.peliculasServicio.agregarPelicula(
      new Pelicula(titulo, sinopsis, anno, genero, [])
    )
  }

}
