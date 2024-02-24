import { Injectable } from '@angular/core';
import { Category } from '../shared/model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

private readonly NEXT_ID_KEY = 'nextId';
private readonly CATEGORY_KEY = 'category';
private setCategory(allCategories : Map<number, Category>) : void {
 localStorage.setItem(this.CATEGORY_KEY,
 JSON.stringify(Array.from(allCategories.values())));
}
private getCategory() : Map<number, Category>{
  let categorieString = localStorage.getItem(this.CATEGORY_KEY);
  let idToCategory = new Map<number, Category>();
  if (categorieString) {
  JSON.parse(categorieString).forEach((category: Category) => {
  Object.setPrototypeOf(category, Category.prototype);
  idToCategory.set(category.identifier, category);
  });
  }
  return idToCategory;
 }
 
private getNextId() : number {
  let nextIdString = localStorage.getItem(this.NEXT_ID_KEY);
  return nextIdString ? parseInt(nextIdString) : 0;
  }
  private setNextId(id : number) : void {
  localStorage.setItem(this.NEXT_ID_KEY, id.toString());
  }

constructor() {
  
 }
list(): Category[] {
 return Array.from(this.getCategory().values());
 }
 get(identifier : number) : Category {
  if (!this.getCategory().has(identifier)) {
  throw new Error(
 "Failed to retrieve category by id: " + identifier);
  }
  return this.getCategory().get(identifier)!;
 }
 delete(identifier: number): void {
  if (!this.getCategory().has(identifier)) {
    throw new Error(
   "Failed to retrieve category by id: " + identifier);
   let categoriesMap = this.getCategory();
   categoriesMap.delete(identifier);
   this.setCategory(categoriesMap);
  
  }}
  update(categories: Category): void {
    if (!this.getCategory().has(categories.identifier)) {
      throw new Error(
     "Failed to retrieve category by id: " + categories.identifier);
    let categoriesMap = this.getCategory();
    categoriesMap.set(categories.identifier, categories);
    this.setCategory(categoriesMap);
   
    }
  }
    add (categories:Category){
      let newId = this.getNextId();
      let categoriesMap = this.getCategory();
      categories.identifier = newId;
      categoriesMap.set(categories.identifier, categories);
      this.setCategory(categoriesMap);
      newId++
      this.setNextId(newId);
 
    }
  
}
