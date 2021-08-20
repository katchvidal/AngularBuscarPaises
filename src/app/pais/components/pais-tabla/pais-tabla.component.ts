import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
    `
    .bandera{
      width : 60px;
      height: 50px;
    }
  `
  ]
})
export class PaisTablaComponent {


@Input() Paises : Country[] = []
  //  Hay que recibir la informacion del Componente Padre

}
