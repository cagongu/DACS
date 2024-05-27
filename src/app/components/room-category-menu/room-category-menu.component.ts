import { Component, OnInit } from '@angular/core';
import { RoomCategory } from '../../common/room-category';
import { RoomService } from '../../services/room.service';
import { Observable, map } from 'rxjs';
import { Room } from '../../common/room';

@Component({
  selector: 'app-room-category-menu',
  templateUrl: './room-category-menu.component.html',
  styleUrl: './room-category-menu.component.css'
})
export class RoomCategoryMenuComponent implements OnInit {

  roomCategories: RoomCategory[] = [];

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.listRoomCategories();
  }

  

  listRoomCategories() {
    this.roomService.getRoomCategories().subscribe(
      data => {
        this.roomCategories = data;
      }
    )
  }

}
