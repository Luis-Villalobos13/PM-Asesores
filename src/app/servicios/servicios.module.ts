import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosRoutingModule } from './servicios-routing.module';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { MensajesComponent } from './mensajes/mensajes.component';


@NgModule({
  declarations: [
    AgendarCitaComponent,
    MensajesComponent,
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
