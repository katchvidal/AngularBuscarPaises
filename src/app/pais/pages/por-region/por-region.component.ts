import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button{
        margin-top : 10px;
        margin-right : 10px;  
      },

      li{
        cursor : pointer;
      }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva : string = '';
  // Almacenar Paises
  Paises : Country[] = []

  constructor( public PaisService : PaisService ) { }

  activarRegion( region : string){

    if ( region === this.regionActiva ) { return };

    this.regionActiva = region
    this.PaisService.buscarRegion( this.regionActiva ).subscribe( paises => {
      
      this.Paises = paises

      console.log( paises )

    }, ( err )=> {
      this.Paises = []
    })

  }

  ngOnInit(): void {
  }

}
