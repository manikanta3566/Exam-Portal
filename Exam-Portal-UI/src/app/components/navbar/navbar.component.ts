import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButton, MatButtonModule, MatIconButton} from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbar,MatIcon,MatIconModule,MatToolbarModule,MatButton,MatIconButton,RouterLink,UpperCasePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public loginService:LoginService,private router:Router){

  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['login']);
  }

}
