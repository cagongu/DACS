import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, count, map } from 'rxjs';
import { Room } from '../common/room';
import { RoomCategory } from '../common/room-category';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  
  private BaseUrl = 'http://localhost:8080/api/phongs';
  private CategoryUrl = 'http://localhost:8080/api/room-category';

  constructor(private httpClient: HttpClient) { }

  getRoomList(theCategoryId: number) :Observable<Room[]> {
    const searchUrl = `${this.BaseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.phongs)
    );
  }

  getRoomListPaginate(thePage: number, 
                      thePageSize: number, 
                      theCategoryId: number) :Observable<GetResponse> {
    
    // need to build URL based on category id, page and size
    const searchUrl = `${this.BaseUrl}/search/findByCategoryId?id=${theCategoryId}`
                    + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponse>(searchUrl);
  }

  getRoomCategories() : Observable<RoomCategory[]> {
    return this.httpClient.get<GetResponseRoomCategory>(this.CategoryUrl).pipe(
      map(response => response._embedded.roomCategory)
    );
  }

  searchRooms(theKeyword: string) : Observable<Room[]> {
    const searchUrl = `${this.BaseUrl}/search/findByDescriptionContaining?description=${theKeyword}`;

    return this.getRooms(searchUrl);
  }

  searchRoomsPaginate(thePage: number, thePageSize: number, theKeyword: string) : Observable<GetResponse>{
    const searchUrl = `${this.BaseUrl}/search/findByDescriptionContaining?description=${theKeyword}`
                    + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponse>(searchUrl);
  }

  getRooms(searchUrl: string): Observable<Room[]> {
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.phongs)
    );
  }

  getRoom(theRoomId: number) : Observable<Room>{
    const roomUrl = `${this.BaseUrl}/${theRoomId}`;

    return this.httpClient.get<Room>(roomUrl);
  }
}

interface GetResponse {
  _embedded: {
    phongs: Room[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseRoomCategory {
  _embedded: {
    roomCategory: RoomCategory[];
  }
}