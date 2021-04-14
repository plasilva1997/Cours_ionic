import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationModel } from 'src/app/models/location.model';
import { PlaceModel } from 'src/app/models/place.model';
import { CategoryService } from 'src/app/services/category.service';
import { PlaceService } from 'src/app/services/place.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.page.html',
    styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
    private placeForm: FormGroup;
    private categories: Array<string>;
    private submited: boolean = false;
    private loader: boolean = false;

    constructor(
        public formBuilder: FormBuilder,
        public router: Router,
        public categoryService: CategoryService, 
        public placeService: PlaceService
    ){}

    ngOnInit(){
        this.categories = this.categoryService.getAll();
        this.buildForm();
    }

    buildForm(){
        this.placeForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            description: ['', [Validators.required, Validators.minLength(20)]],
            address: ['', [Validators.required]],
            image: ['', [
                Validators.required, 
                Validators.pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)
            ]],
            note: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
            category: ['', [Validators.required]],
        });
    }

    save(){
        this.submited = true;
        this.loader = true;
        if(!this.placeForm.valid){
            return;
        }

        let values = this.placeForm.value;
        let location = new LocationModel(values['address']);
        let place = new PlaceModel(
            values['name'],
            values['description'],
            location,
            values['image'],
            values['note'],
            values['category'],
            new Date()
        );

        this.placeService.add(place).subscribe(place => {
            this.router.navigate(['/show', place.id]);
        }).add(() => {
            this.loader = false;
        });
    }

    getForm(){
        return this.placeForm.controls;
    }
}
