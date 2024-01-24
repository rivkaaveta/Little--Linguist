import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { CategoriesComponent } from "./categories/categories.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from '@angular/router';
import { DeleteCategoryDialogComponent } from "./delete-category-dialog/delete-category-dialog.component";




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, HeaderComponent, CategoriesComponent, FooterComponent, RouterModule, DeleteCategoryDialogComponent]
})


export class AppComponent {
  title = 'Little-Linguist';
}

