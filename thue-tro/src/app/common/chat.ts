import { Message } from "./message";

export class Chat {
    constructor(
        public chatId: string,
        public firstUserName: string,
        public secondUserName: string,
        public messageList: Message[]
    ) {}
}
