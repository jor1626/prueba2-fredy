import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// NGRX
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { maestroReducer } from './maestro/maestro.reducer';

// Librerias
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatAutocompleteModule, MatFormFieldModule} from '@angular/material';


//Components

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaestroComponent } from './maestro/maestro.component';
import { environment } from 'src/environments/environment';
import { MaestroFilterComponent } from './maestro/maestro-filter/maestro-filter.component';
import { MaestroFormComponent } from './maestro/maestro-content/maestro-form/maestro-form.component';
import { MaestroTableComponent } from './maestro/maestro-content/maestro-table/maestro-table.component';


@NgModule({
   declarations: [
      AppComponent,
      MaestroComponent,
      MaestroFilterComponent,
      MaestroTableComponent,
      MaestroFormComponent,
      MaestroFilterComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      StoreModule.forRoot({maestro: maestroReducer}),
      StoreDevtoolsModule.instrument({
         maxAge: 25, // Retains last 25 states
         logOnly: environment.production, // Restrict extension to log-only mode
      }),
      ReactiveFormsModule,
      MatInputModule,
      FormsModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      NgxSmartModalModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
