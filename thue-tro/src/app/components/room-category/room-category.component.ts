import { Component, OnInit } from '@angular/core';
import { RoomCategory } from '../../common/room-category';
import { RoomService } from '../../services/room.service';


@Component({
  selector: 'app-room-category',
  templateUrl: './room-category.component.html',
  styleUrl: './room-category.component.css'
})
export class RoomCategoryComponent implements OnInit {

  roomCategories: RoomCategory[] = [];

  constructor(private roomService: RoomService){}

  ngOnInit(): void {
    this.listRoomCategories();

  }
  listRoomCategories() {
    this.roomService.getRoomCategories().subscribe(
      data=> {
        this.roomCategories = data;
      }
    )
  }

}
