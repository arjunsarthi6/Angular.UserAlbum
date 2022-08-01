import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { users } from '../../assets/interfaces/users';
import { album } from '../../assets/interfaces/album';
import { photos } from 'src/assets/interfaces/photos';
import { addAlbum } from 'src/assets/interfaces/addAlbum';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private getUsersEndPoint = "http://jsonplaceholder.typicode.com/users";
  private getUserAlbumsEndPoint = "https://jsonplaceholder.typicode.com/albums?userId=";
  private getUserPhotosEndPoint = "https://jsonplaceholder.typicode.com/photos?albumId=";
  private addUserAlbumEndpoint = "https://62e59e5ade23e263792223ed.mockapi.io/api/v1/createAlbum";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<users[]> {
    return this.http
      .get<users[]>(this.getUsersEndPoint)
  }

  getAlbums(id: any): Observable<album[]> {
    return this.http
      .get<album[]>(this.getUserAlbumsEndPoint+id)
  }

  getPhotos(id: any): Observable<photos[]> {
    return this.http
      .get<photos[]>(this.getUserPhotosEndPoint+id)
  }

  addAlbum() {
    return this.http
    .post<addAlbum[]>(this.addUserAlbumEndpoint, { title: 'Title dummy', description: 'dummy' })
  }

}

