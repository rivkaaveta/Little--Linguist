import { Injectable } from '@angular/core';
import { Category } from '../shared/model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
categories = new Map<number, Category>();
nextId = 0;
constructor() {
  this.categories.set(0,new Category("fruits",0,"12/12/23"))
  this.categories.set(1,new Category("names",1,"12/12/24"))
 }
list(): Category[] {
 return Array.from(this.categories.values());
 }
 get(identifier: number): Category | undefined {
  return this.categories.get(identifier);
  }
 delete(identifier: number): void {
  this.categories.delete(identifier);
  }
  update(categories: Category): void {
    if (this.categories.has(categories.identifier)) {
    this.categories.set(categories.identifier, categories);
    }
    }
   add(newCategoryData:Category) {
    newCategoryData.identifier = this.nextId
    this.categories.set(this.nextId, newCategoryData);
    this.nextId++;
    }
   
 

}
