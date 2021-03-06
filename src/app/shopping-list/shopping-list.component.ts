import { Component, OnInit, Injectable } from '@angular/core';
import {Ingredient} from './../shared/Ingredient.model';
import { ShopingListService } from './shoping-list.service';



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shopingListService: ShopingListService) { }

  ngOnInit() {
   
    
    this.ingredients = this.shopingListService.getIngredients();
    this.shopingListService.ingredientsChanged.subscribe((ingredients:Ingredient[])=>{
      return this.ingredients =  ingredients;
    }); 
     
  }



}
