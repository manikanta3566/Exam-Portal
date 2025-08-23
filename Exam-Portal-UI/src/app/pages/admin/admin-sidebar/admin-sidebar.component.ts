import { Component } from '@angular/core';
import { MatCardModule, MatCard, MatCardActions, MatCardTitle } from '@angular/material/card';
import { MatListModule, MatList ,MatListItem} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule,MatIcon} from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  imports: [MatCard, MatCardActions, MatCardTitle, MatList, MatListItem, MatButtonModule, MatIcon, RouterLink],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {

}
