import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ShopingListService} from'../../shopping-list/shoping-list.service'
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id:number;
  recipe:Recipe;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params)=>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      })
  }

  onAddItems(){
    const target = this.recipe;
    this.recipeService.addToShoppingList(this.recipe.ingredients)

  }

  onEditRecipe(){

    this.router.navigate(['edit'], {relativeTo: this.route})

  }

}
