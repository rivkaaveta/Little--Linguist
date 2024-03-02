import { Component,Input,OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Category } from '../shared/model/category';
import { CategoryService } from '../services/category.service';
import { language } from '../shared/model/language';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,FormsModule,RouterLink,CommonModule,MatButtonModule,MatIconModule],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.css'
})
export class TranslateComponent implements OnInit {
  @Input()identifierstring?: string;
  currentCategory: Category = new Category("Bin",4,language.Hebrew,language.English,new Date())
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    if (this.identifierstring) {
    let identifier:number = parseInt(this.identifierstring);

      this.currentCategory = this.categoryService.get(identifier);
      

}
}


}
