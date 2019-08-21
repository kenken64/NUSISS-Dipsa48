export class Rsvp {
    constructor(
        public name: string,
        public email: string,
        public phone: string,
        public attending?: string,
        public guest?: string,
        public dob?: Date
    ) {

    }
}