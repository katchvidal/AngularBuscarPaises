import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  ngOnInit():void {
    
    this.debouncer
      .pipe( 
        debounceTime(300)
      )
      .subscribe( valor => {
        this.onDebounce.emit( valor )
      })

  }

  @Input() placeholder : string = ''

  //  Emitiendo la informacion del componente hijo al padre
  @Output() onEnter : EventEmitter<string> = new EventEmitter()

  //  -> Debounce
  @Output() onDebounce: EventEmitter<string> = new EventEmitter()
  debouncer : Subject<string> = new Subject()

  termino : string = ""

  buscar(){

    this.onEnter.emit( this.termino )

  }

  keypush(  ){

    this.debouncer.next( this.termino )

  }

}
