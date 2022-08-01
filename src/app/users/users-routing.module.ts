import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlbumComponent } from './add-album/add-album.component';
import { AlbumComponent } from './album/album.component';
import { PhotosComponent } from './photos/photos.component';
import { UserlistComponent } from './userlist/userlist.component';
PhotosComponent

const routes: Routes = [{
  path:'users/userlist',
  component: UserlistComponent,
  title:'Userlist'
},{
  path:'users/album/:id/:name',
  component: AlbumComponent,
  title:'View album'
},{
  path:'users/photos/:id/:name',
  component: PhotosComponent,
  title:'View photos'
},{
  path:'users/addAlbum/:id/:name',
  component: AddAlbumComponent,
  title:'View album'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
