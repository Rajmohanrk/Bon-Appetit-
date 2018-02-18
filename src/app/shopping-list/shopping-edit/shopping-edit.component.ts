import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') name:ElementRef;
@ViewChild('amountInput') amount:ElementRef;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem(){
    const itemName = this.name.nativeElement.value;
    const itemAmount = this.amount.nativeElement.value;
    const itemIngredient = new Ingredient(itemName,itemAmount);
 this.shoppingListService.ItemsAdded(itemIngredient);
  }
}
