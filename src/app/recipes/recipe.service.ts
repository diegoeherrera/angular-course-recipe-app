import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from '.././recipes/recipe.model';
import {Ingredient} from '../shared/Ingredient.model'
import { ShopingListService } from '../shopping-list/shoping-list.service';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipeSelected = new EventEmitter <Recipe>();
  recipes: Recipe[] = [
    new Recipe("Full Power Salad", "A.K.A. king of salads", 
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    [
      new Ingredient("Avocado",2),
      new Ingredient("Tomato",3),
      new Ingredient("Blue Cheese",1)

    ]),

    new Recipe("Curry", "Tasty Curry", 
    "https://hips.hearstapps.com/delish/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg",
    [
      new Ingredient("Rice", 1),
      new Ingredient("Pepper", 1),
      new Ingredient("Lime",2)

    ]),
    new Recipe("Asado", "Argentina's favorite food", 
    "https://www.telediariodigital.net/wp-content/uploads/2014/09/1ADD2C6FD.jpg",
    [
      new Ingredient("Meet", 1),
      new Ingredient("Carbon", 1),
      new Ingredient("Chimi Chu",2)

    ])
    
  ];

  constructor(private shopingListService: ShopingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addToShoppingList(ingredients: Ingredient[]){

    this.shopingListService.addIngredients(ingredients)
    
  }
}
