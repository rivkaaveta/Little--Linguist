import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Category } from '../shared/model/category';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { TranslatedWord } from '../shared/model/translatedword';
import { MatIconModule } from '@angular/material/icon';
import { language } from '../shared/model/language';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  @Input() identifierString?: string;
  currentCategory: Category = new Category(
    '',
    0,
    language.English,
    language.Hebrew,
    new Date()
  );
  wordsField: any;
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (this.identifierString) {
      let identifier: number = parseInt(this.identifierString);
      const category = this.categoryService.get(identifier);
      if (category) {
        this.currentCategory = category;
      }
    }
  }
  onSubmitRegistration() {
    console.log('Form submitted!');
    if (this.identifierString) {
      this.categoryService.update(this.currentCategory);
    } else {
      this.categoryService.add(this.currentCategory);
    }

    this.router.navigate(['/']);
  }
  addTranslatedWord() {
    this.currentCategory.words.push(new TranslatedWord('', ''));
  }
}
