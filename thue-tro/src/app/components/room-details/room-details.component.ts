import { Component, OnInit } from '@angular/core';
import { Room } from '../../common/room';
import { RoomService } from '../../services/room.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { User } from '../../common/user';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.css'
})
export class RoomDetailsComponent implements OnInit {

  room!: Room;
  roomOwner!: User;

  constructor(private roomService: RoomService, private route: ActivatedRoute,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }
  handleProductDetails() {

    const theRoomId: string = this.route.snapshot.paramMap.get('id')!;

    this.roomService.getRoom(theRoomId).subscribe(
      data => {
        this.room = data;
      }
    );
  }
}
