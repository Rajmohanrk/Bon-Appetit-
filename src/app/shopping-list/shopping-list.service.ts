import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    ingredientsAdded = new EventEmitter<Ingredient[]>();
    private ingredients:Ingredient[]=[new Ingredient('Onions',5),new Ingredient('tomato',6)];

    getIngredients(){
        return this.ingredients.slice();
    }
    ItemsAdded(IngredientsAdded:Ingredient){
        this.ingredients.push(IngredientsAdded);
        this.ingredientsAdded.emit(this.ingredients.slice())
         }
}