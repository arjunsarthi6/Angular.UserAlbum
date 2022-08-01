import { Component, OnInit } from '@angular/core';
import { users } from '../../../assets/interfaces/users';
import { UsersService } from '../users.service';
import {faFolder, faFolderPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  faAlbum = faFolder;
  faAlbumAdd = faFolderPlus;
  allUsers: users[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe((data) => {
      this.allUsers = data;
    })
  }

}
