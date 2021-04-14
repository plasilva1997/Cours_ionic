import { AfterContentInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[expand]'
})
export class ExpandDirective implements AfterContentInit{
    private text: string;
    private isExpanded: boolean = true;

    constructor(private el: ElementRef){}

    ngAfterContentInit(){
        this.text = this.el.nativeElement.innerText;
        this.toggleExpanded();
    }

    @HostListener('click') onClick(){
        this.toggleExpanded();
    }

    toggleExpanded(){
        if(this.isExpanded){
            this.el.nativeElement.innerHTML = this.text.substr(0, 40) + '...';
            this.el.nativeElement.innerHTML += '<br> Voir plus <ion-icon name="chevron-down"></ion-icon>';
        }else{
            this.el.nativeElement.innerHTML = this.text;
            this.el.nativeElement.innerHTML += '<br> Voir moins <ion-icon name="chevron-up"></ion-icon>';
        }

        this.isExpanded = !this.isExpanded;
    }
}
