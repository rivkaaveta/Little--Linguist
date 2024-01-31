import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/model/category';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CategoryService } from '../services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCategoryDialogComponent } from '../delete-category-dialog/delete-category-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { DatePipe} from '@angular/common';



@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [MatTableModule,MatIconModule,DeleteCategoryDialogComponent,MatButtonModule,RouterModule,FormsModule,MatFormFieldModule,DatePipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'type','date', 'index'];
  constructor(private categoryService: CategoryService,private dialog: MatDialog) {}
  categories: Category[]=[]
  ngOnInit(): void {
    this.categories=this.categoryService.list()
    }
    deleteCategory(identifier:number,name:string){
    const dialogRef = this.dialog.open(DeleteCategoryDialogComponent,{data:name,});
    dialogRef.afterClosed().subscribe(deletionConfirmed => {
      if(deletionConfirmed==true){
      this.categoryService.delete(identifier)
      this.categories=this.categoryService.list()
      }
      });
      }}    
export class category {
  constructor(public name: string, public score: number,public lastChangeDate: number) {}

 
}