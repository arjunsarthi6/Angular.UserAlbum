import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserlistComponent } from './userlist/userlist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlbumComponent } from './album/album.component';
import { PhotosComponent } from './photos/photos.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserlistComponent,
    AlbumComponent,
    PhotosComponent,
    AddAlbumComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UsersModule { }
