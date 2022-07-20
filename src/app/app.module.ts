import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas de los componentes principales
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InicioComponent } from './shared/inicio/inicio.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

// Configuración de Firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

// Importaciones de librerias de Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { InformacionComponent } from './components/informacion/informacion.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    InformacionComponent,
    LoginComponent,
    RegisterComponent,
    InicioComponent,
    ErrorPageComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Librerias de Angular Material
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,

    // Librerias Firebase
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule,
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
