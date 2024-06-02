import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Room } from '../common/room';
import { Observable, map } from 'rxjs';
import { RoomCategory } from '../common/room-category';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private BaseUrl: string = 'http://localhost:8080/api/v1/room';
  private CategoryUrl = 'http://localhost:8080/api/v1/category';

  constructor(private httpClient: HttpClient) { }

  getRoomList(theCategoryId: string): Observable<Room[]> {
    const searchUrl = `${this.BaseUrl}/by-category?categoryId=${theCategoryId}`;

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response.content)
    );
  }

  getRoomCategories(): Observable<RoomCategory[]> {

    return this.httpClient.get<RoomCategory[]>(this.CategoryUrl).pipe(
      map(response => response)
    )
  }

  searchRooms(theKeyWord: string): Observable<Room[]> {
    const searchUrl = `${this.BaseUrl}?roomName=${theKeyWord}`

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response.content)
    )
  }

  getRoom(theRoomId: string): Observable<Room> {
    const roomUrl = `${this.BaseUrl}/${theRoomId}`;
    return this.httpClient.get<Room>(roomUrl);
  }

  getUserById(userId: string): Observable<User>{
    const findUrl = `http://localhost:8080/users/getbyid/${userId}`;
    return this.httpClient.get<User>(findUrl);
  }

  getUserInRoom(theRoomId: string): Observable<User[]> {
    const findUserUrl = `http://localhost:8080/users/getuserinroombyid/${theRoomId}`;
    return this.httpClient.get<User[]>(findUserUrl).pipe(
      map(data => {
        return data.map(item => new User(
          item.userId,
          item.username,
          item.password,
          item.email,
          item.rooms
        ));
      })
    );
  }

}

interface GetResponse {
  content: Room[]
}