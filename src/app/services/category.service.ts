import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
    private categories: Array<string> = [
        'Italien',
        'Mexicain',
        'Burger',
    ];

    constructor(){}

    getAll(){
        return this.categories;
    }
}
