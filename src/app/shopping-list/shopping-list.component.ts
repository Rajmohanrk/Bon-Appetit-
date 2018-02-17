import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[]=[new Ingredient('Onions',5),new Ingredient('tomato',6)];
  constructor() { }

  ngOnInit() {
  }
  ItemsAdded(IngredientsAdded:Ingredient){
 this.ingredients.push(IngredientsAdded);
  }
}
