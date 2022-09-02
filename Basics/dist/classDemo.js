"use strict";
//Classes
class Room {
    constructor(room) {
        this.room = room;
        this.family = [];
        this.dobShikha = '1982-12-12';
        this.dobHriday = '2013-12-12';
    }
    addFamilyMember(member) {
        this.family.push(member);
    }
    showFamily() {
        console.log(this.family);
    }
}
class OyoRoom extends Room {
    constructor(room, roomRent) {
        super(room);
        this.roomRent = roomRent;
        this.reports = [];
    }
    cleanRoom(soap) {
        console.log(`Cleaning ${this.room}'s Oyo room with ${soap}`);
    }
    get allReports() {
        return this.reports;
    }
    set newReport(report) {
        this.reports.push(report);
    }
    static createRoom(room) {
        return { room };
    }
    addFamilyMember(member) {
        if (member === 'Kapil')
            return;
        this.family.push(member);
    }
    changeRoomRent(rent) {
        this.roomRent = rent;
    }
    showRoomRent() {
        console.log(`${this.room}'s room rent is ${this.roomRent}`);
    }
}
OyoRoom.currentYear = 2022;
class TreboHotel extends Room {
    constructor(room, roomRent) {
        super(room);
        this.roomRent = roomRent;
    }
    static getInstance() {
        if (!TreboHotel.instance) {
            TreboHotel.instance = new TreboHotel('Trebo', 1000);
        }
        return TreboHotel.instance;
    }
    cleanRoom(soap) {
        console.log(`Cleaning ${this.room}'s Trebo room with ${soap}`);
    }
}
const vijayRoom = TreboHotel.getInstance();
console.log(vijayRoom);
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
