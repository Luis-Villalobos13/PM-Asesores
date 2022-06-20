import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent implements OnInit {

  constructor(
    private userServices: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    this.userServices.logout()
    .then(() => {
      this.router.navigate(['/inicio']);
    })
    .catch(error => console.log(error));
  }

}
