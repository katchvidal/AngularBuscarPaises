import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private PaisesUrl : string = 'https://restcountries.eu/rest/v2';

  constructor( private Http : HttpClient ) { }
  
  buscarPais( termino : string) : Observable<Country[]> {

    const url = `${this.PaisesUrl}/name/${termino}`

    return this.Http.get<Country[]>( url )

  }

  buscarCapital( termino : string):Observable<Country[]>{

    const url = `${this.PaisesUrl}/capital/${termino}`

    return this.Http.get<Country[]>( url )

  }

  buscarRegion( termino : string) : Observable<Country[]>{

    
    const url = `${this.PaisesUrl}/region/${termino}`

    return this.Http.get<Country[]>( url )

  }


  buscarId( id : string ) : Observable<Country>{

    const url = `${this.PaisesUrl}/alpha/${id}`

    return this.Http.get<Country>( url )

  }
  
}
