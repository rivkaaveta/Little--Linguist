import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { FormComponent } from './form/form.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { GameComponent } from './game/game.component';
import { TranslateComponent } from './translate/translate.component';


export const routes: Routes = [
    {path: '', component: CategoriesComponent},
    {path: 'category/:identifierString', component: FormComponent},
    {path: 'newcategory', component: FormComponent},
    {path: "errors", component: ErrorHandlingComponent},
    {path: "game", component :GameComponent},
    {path: "translate", component :TranslateComponent},

];
