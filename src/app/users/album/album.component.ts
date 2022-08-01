import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { album } from '../../../assets/interfaces/album';
import { UsersService } from '../users.service';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  faAlbum = faFolder;
  userId: string;
  userName: string;
  allAlbums: album[] = [];

  constructor(private actRoute: ActivatedRoute, private usersService: UsersService) {
    this.userId = this.actRoute.snapshot.params['id'];
    this.userName = this.actRoute.snapshot.params['name'];
    console.log("userId", this.userId);
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.usersService.getAlbums(this.userId).subscribe((data) => {
      console.log("albums", data);
      this.allAlbums = data;
    })
  }

}
