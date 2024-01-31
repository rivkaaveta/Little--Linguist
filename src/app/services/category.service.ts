import { Injectable } from '@angular/core';
import { Category } from '../shared/model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
categories = new Map<number, Category>();
nextId = 0;
constructor() {
  
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
