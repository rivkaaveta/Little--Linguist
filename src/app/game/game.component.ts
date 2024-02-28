import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { CategoryService } from '../services/category.service';
import { CategoriesComponent } from '../categories/categories.component';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../shared/model/category';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    CategoriesComponent,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,MatIconModule,MatButtonModule,RouterLink

  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent implements OnInit {
  selected = 0
  @Input() name?: string;
  constructor(
    private categoryService: CategoryService,
    private dialog: MatDialog
  ) {}
  categories: Category[] = [];

  ngOnInit(): void {
    this.categories = this.categoryService.list();
  }

}
