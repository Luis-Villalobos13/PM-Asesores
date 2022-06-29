import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formReg: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.register(this.formReg.value)
      .then(response => {
        Swal.fire(
          '¡Buen trabajo!',
          'Registro exitoso',
          'success'
        )
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch(error => 
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Faltan por rellenar datos...',
        }))
  }

}