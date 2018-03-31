import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AdministrarMateriasComponent } from './componentes/administrar-materias/administrar-materias.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'administrarMaterias', component: AdministrarMateriasComponent },
  { path: '**', component: InicioComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    InicioComponent,
    AdministrarMateriasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
