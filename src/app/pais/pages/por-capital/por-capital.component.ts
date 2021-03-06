import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {


  ngOnInit(): void {
  }

  //  Establecer como es el 'Termino' de busqueda
  termino : string = "";

  // Helper para Determinar Errores
  terminoError : boolean = false

  // Almacenar Paises
  Paises : Country[] = []

  //  Funcion para Buscar con API -> Servicio Paises
  //  Recibimos el Termino de tipo String del Componente Hijo
  buscar( termino : string ){

    this.terminoError = false

    //  El termino es igual a lo que recibimos del componente hijo
    this.termino = termino
    console.log( this.termino)

    this.PaisService.buscarCapital( this.termino ).subscribe( paises => {
      console.log( paises )
      this.Paises = paises
    }, ( err) =>{
      this.terminoError = true
      this.Paises = []
    })
    
  }

  //  Inyectamos los Servicios y sus funcionalidades
  constructor( private PaisService : PaisService) { }


  surgerencias( termino : string ){
    this.terminoError=false
    
  }


}
