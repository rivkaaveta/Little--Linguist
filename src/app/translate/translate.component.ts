import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../shared/model/category';
import { language } from '../shared/model/language';
import { TranslatedWord } from '../shared/model/translatedword';


@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    RouterLink,
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.css',
})
export class TranslateComponent implements OnInit {
  showResult: boolean[] = [];
  message = '';

  @Input() identifierstring?: string;
  currentCategory: Category = new Category(
    'Bin',
    4,
    language.Hebrew,
    language.English,
    new Date()
  );
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    if (this.identifierstring) {
      let identifier: number = parseInt(this.identifierstring);

      this.currentCategory = this.categoryService.get(identifier);
    }
  }
  
  check() {
    let count = 0;
    this.showResult = []; 
    for (let word of this.currentCategory.words) {
      if (word.translate == word.targetLanguage) {
        this.showResult.push(true);
        count++;
      } else {
        this.showResult.push(false);
      }
    }
    let incorrectCount = this.currentCategory.words.length - count;
    if (count == this.currentCategory.words.length) {
      this.message ="Well Done, You Finished!";
    } else {
      this.message = "Try Again, You Translated" + "" + incorrectCount + "" + "out of" + " " + "" + this.currentCategory.words.length +"" +""+ "words correctly";
    }

      }
    }
  