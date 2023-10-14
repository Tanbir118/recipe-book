import { Subject } from 'rxjs';
import { Ingredient } from "../shared/models/ingredient.model";

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(items: Ingredient[]) {
    this.ingredients.push(...items);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
