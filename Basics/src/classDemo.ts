//Classes
abstract class Room {
    protected family: string[] = [];
    readonly dobShikha: string = '1982-12-12';
    private readonly dobHriday: string = '2013-12-12';
    constructor(public room: string){}

    addFamilyMember(member: string){
        this.family.push(member);
    }

    showFamily() {
        console.log(this.family);
    }

    abstract cleanRoom(soap: string): void;
}

class OyoRoom extends Room {
    private reports: string[] = [];
    static currentYear = 2022;
    cleanRoom(soap: string){
        console.log(`Cleaning ${this.room}'s Oyo room with ${soap}`);
    }

    get allReports() {
        return this.reports;
    }

    set newReport(report: string){
        this.reports.push(report);
    }

    constructor(room: string, private roomRent: number){
        super(room);
    }

    static createRoom(room: string){
        return { room }
    }

    addFamilyMember(member: string){
        if(member === 'Kapil')
            return;
        this.family.push(member)
    }

    changeRoomRent(rent: number){
        this.roomRent = rent;
    }

    showRoomRent() {
        console.log(`${this.room}'s room rent is ${this.roomRent}`);
    }
}

class TreboHotel extends Room {
    private static instance: TreboHotel;
    private constructor(room: string, private roomRent: number){
        super(room);
    }

    static getInstance() {
        if(!TreboHotel.instance){
            TreboHotel.instance = new TreboHotel('Trebo', 1000);
        }
        return TreboHotel.instance;
    }

    cleanRoom(soap: string){
        console.log(`Cleaning ${this.room}'s Trebo room with ${soap}`);
    }
}

const vijayRoom = TreboHotel.getInstance();
console.log(vijayRoom)

const rohitRoom = OyoRoom.createRoom('Rohit');
console.log(rohitRoom);
console.log(OyoRoom.currentYear);
const shekarRoom = new OyoRoom('Shekar', 1000);
shekarRoom.newReport = 'Year End Report';
console.log(shekarRoom.allReports);
shekarRoom.showRoomRent();
shekarRoom.changeRoomRent(2000);
shekarRoom.showRoomRent();
shekarRoom.cleanRoom('Phenyl');
shekarRoom.addFamilyMember('Shekar');
shekarRoom.addFamilyMember('Kapil');
shekarRoom.addFamilyMember('Shobha');
shekarRoom.showFamily();

// const nabRoom = new Room('Nabendu');
// nabRoom.dobShikha;
// nabRoom.addFamilyMember('Nabendu');
// nabRoom.addFamilyMember('Shikha');
// nabRoom.addFamilyMember('Hriday');
// nabRoom.cleanRoom('Lizol');
// nabRoom.showFamily();