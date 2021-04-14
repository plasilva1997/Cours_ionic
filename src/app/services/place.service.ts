import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlaceModel } from '../models/place.model';

@Injectable({
    providedIn: 'root'
})
export class PlaceService {
    private url: string = "http://localhost:3000/place";

    constructor(public http: HttpClient){}

    getAll(){
        return this.http.get(this.url);
    }

    getById(id: number){
        return this.http.get(this.url + '/' + id);
    }

    add(place: PlaceModel){
        return this.http.post<PlaceModel>(this.url, place);
    }
}
