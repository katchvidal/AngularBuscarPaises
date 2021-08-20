import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
    `
      .bandera{

        width : 200px;
        height: 100px;

      }

      .mr-2 {
        margin-right : 10px;
        padding : 10px;
        margin-bottom : 10px;
      }

    `
  ]
})
export class VerPaisComponent implements OnInit {

  Pais! : Country 

  constructor( 

    private activatedRoute : ActivatedRoute,
    private PaisService : PaisService 

  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap ( ( { id } ) => this.PaisService.buscarId( id ) ),
        tap ( console.log )
      )
      .subscribe(  res  => this.Pais = res )

  }

}
