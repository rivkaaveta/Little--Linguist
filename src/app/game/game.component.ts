import { CommonModule } from '@angular/common';
import { Component, OnInit,Input} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { CategoryService } from '../services/category.service';
import { CategoriesComponent } from '../categories/categories.component';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../shared/model/category';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [MatInputModule, CommonModule,CategoriesComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {
  @Input() name?:string;
  constructor(private categoryService: CategoryService,private dialog: MatDialog) {}
  categories: Category[]=[]

  ngOnInit(): void {
    this.categories=this.categoryService.list()
    }
    onCategoryClick(){

    }

}
