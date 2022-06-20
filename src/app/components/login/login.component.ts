import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

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
      console.log(response);
      this.router.navigate(['/servicios/agendar-cita']);
    })
    .catch(error => console.log(error));
    
  }

  onClick() {
    this.userServices.loginWithGoogle()
    .then(response => {
      console.log(response);
      this.router.navigate(['/servicios/agendar-cita']);
      
    })
    .catch(error => 
      console.log(error));
  }

}
