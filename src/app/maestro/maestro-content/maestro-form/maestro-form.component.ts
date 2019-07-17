import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { CrearMaestroAction } from '../../maestro.actions';

@Component({
  selector: 'app-maestro-form',
  templateUrl: './maestro-form.component.html',
  styleUrls: ['./maestro-form.component.css']
})
export class MaestroFormComponent implements OnInit {

  formData: FormGroup;
  accion_form: number;

  @Input() set accion(data: number){
    if(data == 1){
      this.formData.reset();
      this.smartModalService.getModal('maestro_form_modal').open();
      this.accion_form = 1;
    }
  }

  constructor(
    private fb: FormBuilder,
    private smartModalService: NgxSmartModalService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.formData = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  submitMaestroForm(form: FormGroup){
    if(this.formData.valid){
      const data = this.formData.value;

      const action = new CrearMaestroAction(data.nombre);

      this.store.dispatch(action);

      this.smartModalService.getModal('maestro_form_modal').open();
      
      this.accion_form = 0;
    } 
  }

}
