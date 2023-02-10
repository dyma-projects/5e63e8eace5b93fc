import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public users!: string[];

  constructor(private userService: UserService) // il faut probablement injecter un service ici !
  {}

  ngOnInit() {
    this.userService.users$.next(['Cédric', 'Quentin', 'Dyma']);
    this.userService.users$.subscribe((users) => {
      return this.users = users;
      
    })
  }

  
}
