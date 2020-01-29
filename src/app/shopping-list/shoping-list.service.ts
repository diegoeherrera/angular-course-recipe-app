import { Injectable, EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/Ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class ShopingListService {
    ingredientsChanged = new EventEmitter <Ingredient[]>();
    ingredients: Ingredient[] = [
    new Ingredient("Apple",5),
    new Ingredient("Tomatoe",5),
    new Ingredient("Orange",5)
  
  ]

  constructor() { }

  getIngredients(){
    return this.ingredients.slice(); 

  }
  
  addIngredient(newIngredient){
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients){
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice());

  }

  removeItem(){
    
  }

  
}