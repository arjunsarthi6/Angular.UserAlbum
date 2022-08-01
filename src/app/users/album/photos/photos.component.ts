import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { photos } from 'src/assets/interfaces/photos';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  albumId: string;
  albumName: string;
  allPhotos: photos[] = [];

  constructor(private actRoute: ActivatedRoute, private usersService: UsersService) {
    this.albumId = this.actRoute.snapshot.params['id'];
    this.albumName = this.actRoute.snapshot.params['name'];
    console.log("userId", this.albumId);
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos() {
    this.usersService.getPhotos(this.albumId).subscribe((data) => {
      console.log("photos", data);
      this.allPhotos = data;
    })
  }

}
