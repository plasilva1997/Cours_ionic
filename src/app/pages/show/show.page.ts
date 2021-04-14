import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
    private place: Object; 
    private loaded: boolean = false;

    constructor(public route: ActivatedRoute, public placeService: PlaceService){}

    ngOnInit(){
        let id = parseInt( this.route.snapshot.params['id'] );
        this.placeService.getById(id).subscribe( place => {
            this.place = place;
        }).add( () => {
            this.loaded = true;
        });
    }

}
