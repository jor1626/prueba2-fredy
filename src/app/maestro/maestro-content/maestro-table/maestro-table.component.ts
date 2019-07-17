import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MaestroClass } from '../../model/maestro.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { EditarMaestroAction, ActivarMaestroAction, DesactivarMaestroAction } from '../../maestro.actions';

@Component({
  selector: 'app-maestro-table',
  templateUrl: './maestro-table.component.html',
  styleUrls: ['./maestro-table.component.css']
})
export class MaestroTableComponent implements OnInit {

  maestros: MaestroClass[] = [];
  accion_form: number;

  @Output() mostrarFiltro = new EventEmitter<number>();

  constructor(private store: Store<AppState>) {
    this.accion_form = 0;
  }

  ngOnInit() {
    this.store.subscribe(state => {
      this.maestros = state.maestro
    })
  }

  nuevo(){
    this.accion_form = 1;
  }

  editar(data: any){
    const action = new EditarMaestroAction(data);

    this.store.dispatch(action);

    this.mostrarFiltro.emit(1);
  }

  activar(data: number){
    const action = new ActivarMaestroAction(data);

    this.store.dispatch(action);
  }

  desactivar(data: number){
    const action = new DesactivarMaestroAction(data);

    this.store.dispatch(action);
  }

}
