import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      .bandera{
        width : 60px;
        height: 50px;
      },

      li{
        cursor : pointer;
      }

    `
  ]
})
export class PorPaisComponent{

  //  Establecer como es el 'Termino' de busqueda
  termino : string = "";

  // Helper para Determinar Errores
  terminoError : boolean = false

  // Almacenar Paises
  Paises : Country[] = []

  paisesSugeridos : Country[] = []

  //  Funcion para Buscar con API -> Servicio Paises
  //  Recibimos el Termino de tipo String del Componente Hijo
  buscar( termino : string ){

    this.terminoError = false

    //  El termino es igual a lo que recibimos del componente hijo
    this.termino = termino
    console.log( this.termino)

    this.PaisService.buscarPais( this.termino ).subscribe( paises => {
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

    this.PaisService.buscarPais( termino ).subscribe( paises => this.paisesSugeridos = paises.splice( 0, 5 ),
    (err) => this.paisesSugeridos = [] )
  }

}
