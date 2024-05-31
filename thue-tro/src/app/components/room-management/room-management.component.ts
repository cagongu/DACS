import { Component, OnInit } from '@angular/core';
import { Room } from '../../common/room';
import { RoomService } from '../../services/room.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrl: './room-management.component.css'
})
export class RoomManagementComponent implements OnInit {
sendMessage() {
throw new Error('Method not implemented.');
}

  room!: Room;
  messageList: any;

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
