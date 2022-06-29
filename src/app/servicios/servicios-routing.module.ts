import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarCitaComponent } from './pages/agendar-cita/agendar-cita.component';
import { HomeComponent } from './pages/home/home.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';

const routes: Routes = [  
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'agendar-cita',
        component: AgendarCitaComponent
      },
      {
        path: 'mensajes',
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
