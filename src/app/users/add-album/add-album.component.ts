import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { addAlbum } from '../../../assets/interfaces/addAlbum';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {
  addUserAlbum!: FormGroup;
  submitted = false;
  userId: string;
  userName: string;
  addAlbums: addAlbum[] = [];

  constructor(private formBuilder: FormBuilder, private actRoute: ActivatedRoute, private usersService: UsersService) {
    this.userId = this.actRoute.snapshot.params['id'];
    this.userName = this.actRoute.snapshot.params['name'];
  }

  ngOnInit(): void {
    this.addUserAlbum = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  addAlbum() {
    this.usersService.addAlbum().subscribe((data) => {
      this.addAlbums = data;
      if(this.addAlbums)
      alert("submission was successful!!");
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.addUserAlbum.invalid) {
      return;
    }
    this.addAlbum();

  }

}
