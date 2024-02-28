import { Component,Input,OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Category } from '../shared/model/category';
import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,FormsModule,RouterLink],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.css'
})
export class TranslateComponent implements OnInit {
  @Input()identifier?: number;
  categories: Category[] = [];
  constructor(private categoryService: CategoryService) {
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

