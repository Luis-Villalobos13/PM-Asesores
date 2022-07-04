import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './components/informacion/informacion.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { InicioComponent } from './shared/inicio/inicio.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: 'servicios',
    loadChildren: () => import('./servicios/servicios.module').then(m => m.ServiciosModule), ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'informacion',
    component: InformacionComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'error-page',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '/error-page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
