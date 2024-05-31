export class Message {
    constructor(
        //day la user name nguoi gui hay con goi la firstUserName
        public senderEmail: string,
        public time: string,
        public replymessage: string,
        public chat: any,
    ) { }
}
