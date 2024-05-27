export class Room {
    constructor(public room_id: string,
        public createdDate: Date,
        public lastModifiedDate: Date,
        public name:string,
        public register: boolean,
        public enable : boolean,
        public detail: {
            area: number;
            description:string;
            image1: BinaryType;
            image2: BinaryType;
            image3: BinaryType;
            image4: BinaryType;
        },
        public Category:{
            description:string
        }

    ){}
}
