import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-error-handling',
  standalone: true,
  imports: [MatIconModule, MatFormFieldModule, MatInputModule, FormsModule,
    MatButtonModule],
  templateUrl: './error-handling.component.html',
  styleUrl: './error-handling.component.css'
})
export class ErrorHandlingComponent {
  constructor(private categoryService : CategoryService) {}

  categoryIndex? : number;
  currentCategoryName : string = "";
  getCategoryDataByIndex() {
    this.currentCategoryName =
     this.categoryService.get(this.categoryIndex!)!.name;
    

  }

}
