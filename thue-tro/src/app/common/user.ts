import { Room } from "./room";

export class User {
    constructor(
        public userId: string,
        public username: string,
        public password: string,
        public email: string,
        public rooms: Room
    ) {}
}
