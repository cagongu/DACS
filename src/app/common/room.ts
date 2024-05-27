export class Room {
    constructor(public id: number,
        public description: string,
        public address: string,
        public price: number,
        public dateCreated: Date,
        public lastUpdated: Date,
        public category: {
            name: string;
        },
        public detail:{
            area: number;
            image1: string;
            image2: string;
            image3: string;
            image4: string;
            image5: string;
            image6: string;
        }
    ){}
}
