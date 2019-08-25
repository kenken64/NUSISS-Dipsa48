export class Weather {
    constructor(public city: string,
        public temp: number,
        public pressure: number,
        public humidity: number,
        public description: string,
        public windDegree: number,
        public windSpeed: number){

    }
}