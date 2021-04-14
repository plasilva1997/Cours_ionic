import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
    private errors: Object = {
        400: 'Requête invalide, veuillez reformuler',
        401: 'Accès à le resource non autorisé',
        404: 'Resource introuvable',
    };

    @Input('message') private message: string;
    @Input('code') private code: number;
    @Output('retry') private retry: EventEmitter<null> = new EventEmitter<null>();
    
    constructor(){}

    ngOnInit(){}

    doRetry(){
        this.retry.emit();
    }
}
