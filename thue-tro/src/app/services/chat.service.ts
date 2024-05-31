import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../common/message';
import { Chat } from '../common/chat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  baseUrl = "http://localhost:8080/chats";

  constructor(private httpClient: HttpClient) { }

  //update chat khi bam gui: lay noi dung trong label de up date. 
  // sender se la username cua nguoi gui
  // khi nguoi gui bam vao inbox thi se lay ra chatid luu trong local.
  updateChat(message: Message, chatId: any): Observable<Object> {
    //   {
    //     "senderEmail": "loda12",
    //     "replymessage": "Good!"
    // }
    return this.httpClient.put(this.baseUrl + "/chats/message/" + `${chatId}`, message);
  }

  getChatById(chatId: any) {
    return this.httpClient.get<Chat>(this.baseUrl + "/chats/" + chatId)
  }

  // addMessageToChatRoom(message: Message): Observable<Object> {
  //   return this.httpClient.post(this.baseUrl + "/chats/add/message1", message);
  // }

  getAllMessagesByChatId(chatId: any) {
    return this.httpClient.get<Message[]>(this.baseUrl + "/chats/all/messages/from/chat/" + chatId)
  }

  createChatRoom(chat: Chat): Observable<Object> {
    // {
    //   "firstUserName": "loda12",
    //   "secondUserName": "loda123",
    //   "messageList": [
    //     {
    //       "senderEmail": "loda12",
    //       "replymessage": "Hello loda123, how are you?"
    //     },
    //     {
    //       "senderEmail": "loda123",
    //       "replymessage": "Hi loda12, I'm doing well. How about you?"
    //     }
    //   ]
    // }
    return this.httpClient.post(this.baseUrl + "/chats/add", chat);
  }

  //kiem tra chat da ton tai chua, neu chua thi tao chat moi.
  getChatByFirstUserNameAndSecondUserName(firstUserName: String, secondUserName: String) {
    return this.httpClient.get<Chat>(this.baseUrl + "/chats/getChatByFirstUserNameAndSecondUserName" + '?firstUserName=' + firstUserName + '&secondUserName=' + secondUserName)
  }

  //chuc nang nay danh cho addmin hoac khong can thiet vi du an khong theo doi nguoi dung
  getChatByFirstUserNameOrSecondUserName(username: any) {
    return this.httpClient.get<Chat>(this.baseUrl + "/chats/getChatByFirstUserNameOrSecondUserName/" + username)
  }

}
