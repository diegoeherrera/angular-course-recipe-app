import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShopingListService } from 'src/app/shopping-list/shoping-list.service';
import { ShoppingListComponent } from '../shopping-list.component';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) inputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;
  

  constructor(private shopingListService: ShopingListService) { }

  ngOnInit() {
  }

  onAddItem(){
  
    const ingName = this.inputRef.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount)

    this.shopingListService.addIngredient(newIngredient);

  }

  removeItem(){
    
  }

  

}
