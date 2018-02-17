import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') name:ElementRef;
@ViewChild('amountInput') amount:ElementRef;
@Output() addedItems = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    const itemName = this.name.nativeElement.value;
    const itemAmount = this.amount.nativeElement.value;
    const itemIngredient = new Ingredient(itemName,itemAmount);
  this.addedItems.emit(itemIngredient);
  }
}
