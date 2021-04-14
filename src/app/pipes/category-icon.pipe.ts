import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'categoryIcon'
})
export class CategoryIconPipe implements PipeTransform {

    transform(value: string, withText:boolean = true){
        let icon = '';
        switch(value){
            case 'Burger':
                icon = 'hamburger';
                break;
            case 'Italien':
                icon = 'pizza-slice';
                break;
            case 'Mexicain':
                icon = 'pepper-hot';
                break;
        }

        if( withText ){
            return '<i class="fas fa-' + icon + '"></i> ' + value;
        }

        return '<i class="fas fa-' + icon + '"></i>';
    }

}
