import { Component } from '@angular/core';
import { MatCardModule, MatCard } from '@angular/material/card';
import { MatDivider, MatList, MatListItem } from "@angular/material/list";
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { UserServiceService } from '../../services/user-service.service';


@Component({
  selector: 'app-profile',
  imports: [MatCard, MatCardModule,MatDivider,MatGridTile,MatGridList,MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user:any={};

  constructor(private userService:UserServiceService){

  }

  ngOnInit(){
      const id=JSON.parse(localStorage.getItem('user') || "{}").id;
      this.userService.getUser(id).subscribe(
        (data)=>{
         this.user=data.data;
        },
        (error)=>{
          console.error(error);
        }
      )
  }
}
