import { LocationModel } from "./location.model";

export class PlaceModel{
    public id: number;

    constructor(
        public name: string,
        public description: string,
        public location: LocationModel,
        public image: string,
        public note: number,
        public category: string,
        public createdAt: Date
    ){}
}