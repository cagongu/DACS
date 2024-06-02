import { Component, OnInit } from '@angular/core';
import { Room } from '../../common/room';
import { RoomService } from '../../services/room.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { User } from '../../common/user';
import { map } from 'rxjs';
import { StorageService } from '../../services/storage.service';
import { Chat } from '../../common/chat';
import { FormGroup } from '@angular/forms';
import { Message } from '../../common/message';

@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrl: './room-management.component.css'
})
export class RoomManagementComponent implements OnInit {

  users: User[] = [];
  room!: Room;
  chatData!: Chat;
  messageList: Message[] = [];
  chatId!: string;
  firstUserName = sessionStorage.getItem("USER");
  secondUserName!: string;
  form: any = {
    senderEmail: sessionStorage.getItem("USER"),
    replymessage: null
  };

  constructor(private roomService: RoomService,
    private chatService: ChatService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleRoomManagement();
    });
  }

  goToChat(secondUserName1: any) {
    sessionStorage.removeItem("chatId");
    this.loadChat(this.firstUserName, secondUserName1);
  }

  loadChat(firstUserName : any, secondUserName: any){
    if (this.firstUserName != null) {
      this.chatService.getChatByFirstUserNameAndSecondUserName(firstUserName, secondUserName).subscribe(
        (data: Chat[]) => {
          this.chatId = data[0].chatId;
          this.chatData = data[0];
          this.messageList = data[0].messageList;
          console.log(data);
          sessionStorage.setItem("chatId", this.chatId);
          this.secondUserName = secondUserName;
          this.messageList.sort((a, b) => {
            const dateA = new Date(a.time);
            const dateB = new Date(b.time);
            return dateA.getTime() - dateB.getTime();
          });
        }
      )
    }
  }

  handleRoomManagement() {
    const theRoomId: string = this.route.snapshot.paramMap.get('id')!;
    this.roomService.getUserInRoom(theRoomId).subscribe(
      data => {
        this.users = data;
      }
    );
  }

  sendMessage() {
    this.chatService.updateChat(this.form, sessionStorage.getItem("chatId")).subscribe(() =>{
      this.loadChat(this.firstUserName, this.secondUserName)
      this.form.replymessage = '';
    });

  }
}