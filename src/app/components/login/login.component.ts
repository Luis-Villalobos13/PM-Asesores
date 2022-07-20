import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private userServices: UserService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }   

  ngOnInit(): void {
  }

  onSubmit() {
    this.userServices.login(this.formLogin.value)
      .then(response => {
        Swal.fire({
          title: 'Inicio de sesión exitoso',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        console.log(response);
        this.router.navigate(['/servicios/pages/agendar-cita']);
      })
      .catch((error) =>
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario y/o contraseña incorrectos...',
        }))
  }

  onClick() {
    this.userServices.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/servicios/pages/agendar-cita']);

      })
      .catch(error =>
        console.log(error));
  }

}
