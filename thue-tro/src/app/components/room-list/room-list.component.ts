import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../common/room';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css'
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];
  currentCategoryId!: string;
  searchMode: boolean = false;

  constructor(private roomService: RoomService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listRooms();
    })
  }
  listRooms() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handlerSearchRooms();
    }
    else {
      this.handlerListRooms();
    }
  }
  handlerSearchRooms() {
    const theKeyWord: string =  this.route.snapshot.paramMap.get('keyword')!;

    this.roomService.searchRooms(theKeyWord).subscribe(
      data => {
        this.rooms = data;
      }
    )
  }

  handlerListRooms() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = this.route.snapshot.paramMap.get('id')!;
    }
    else {
      this.currentCategoryId = "fc6ac4bb-efeb-49ab-b1a0-8dd9cfb0f79c";
    }

    this.roomService.getRoomList(this.currentCategoryId).subscribe(
      data => {
        this.rooms = data;
      });
  }
}
