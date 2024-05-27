import { Component, OnInit } from '@angular/core';
import { Room } from '../../common/room';
import { RoomService } from '../../services/room.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.css'
})
export class RoomDetailsComponent implements OnInit{

  room!: Room;

  constructor(private roomService: RoomService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });

  }

  handleProductDetails() {

    const theRoomId: number = +this.route.snapshot.paramMap.get('id')!;

    this.roomService.getRoom(theRoomId).subscribe(
      data => {
        this.room = data;
      }
    );
  }


}
