import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { FormControl } from '@angular/forms';
import { Observable} from 'rxjs';
import { map, startWith} from 'rxjs/operators';
import { MaestroClass } from '../model/maestro.model';


@Component({
  selector: 'app-maestro-filter',
  templateUrl: './maestro-filter.component.html',
  styleUrls: ['./maestro-filter.component.css']
})
export class MaestroFilterComponent implements OnInit {

  filtrarMaestros = new FormControl();
  options: MaestroClass[] = [];
  filteredOptions: Observable<MaestroClass[]>;

  @Output() mostrarContenido = new EventEmitter<number>();

  constructor(private store: Store<AppState>){
    this.store.subscribe(state => {
      this.options = state.maestro
      state.maestro.find((element: MaestroClass) => {
        if(element.selected === true){
          this.filtrarMaestros.setValue(element.nombre);
        };
      });
    });
  }

  ngOnInit() {

    this.filteredOptions = this.filtrarMaestros.valueChanges.pipe(startWith(''), map(value => this._filter(value)));
  }

  private _filter(value: string): MaestroClass[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }

  changeView(){
    this.mostrarContenido.emit(2);
  }

}
