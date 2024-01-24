import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { FormComponent } from './form/form.component';


export const routes: Routes = [
    {path: '', component: CategoriesComponent},
    {path: 'category/:identifierString', component: FormComponent},
    {path: 'newcategory', component: FormComponent},
];
