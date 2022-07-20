import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
  uid: any = null

  constructor(private authService: UserService) { }

  async ngOnInit() {
/*     console.log('Estoy en perfil');
    this.getUid(); */
  }

/*   async getUid() {
    const uid = await this.authService.getUid();
    if (uid) {
      this.uid = uid;
      console.log('Uid -> ', this.uid);
    } else {
      console.log('No existe Uid');
    }
  }

  getInfoUser() {
    const path = '' 
  } */

}
