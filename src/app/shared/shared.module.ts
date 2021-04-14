import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpandDirective } from '../directives/expand.directive';
import { CategoryIconPipe } from '../pipes/category-icon.pipe';
import { LoaderComponent } from '../components/loader/loader.component';
import { ErrorComponent } from '../components/error/error.component';

const contents = [
    LoaderComponent, 
    ErrorComponent,
    ExpandDirective,
    CategoryIconPipe
];

@NgModule({
    declarations: contents,
    imports: [
        CommonModule,
    ],
    exports: contents,
})
export class SharedModule { }
