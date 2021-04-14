import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactModel } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
    private contactForm: FormGroup;

    constructor(public formBuilder: FormBuilder){}

    ngOnInit(){
        this.buildForm();
    }

    buildForm(){
        this.contactForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            subject: ['', [Validators.required, Validators.minLength(3)]],
            content: ['', [Validators.required, Validators.minLength(20)]],
        });
    }

    send(){
        let values = this.contactForm.value;
        let model = new ContactModel(
            values['name'],
            values['email'],
            values['subject'],
            values['content']
        );
    }


}
