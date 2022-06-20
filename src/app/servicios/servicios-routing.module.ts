import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { MensajesComponent } from './mensajes/mensajes.component';

const routes: Routes = [  
  {
    path: '',
    children: [
      {
        path: 'agendar-cita',
        component: AgendarCitaComponent 
      },
      {
        path: 'mensaje',
        component: MensajesComponent
      },
      {
        path: '**',
        redirectTo: 'agendar-cita'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
