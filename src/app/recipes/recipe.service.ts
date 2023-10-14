import { Injectable } from "@angular/core";

import { Ingredient } from "../shared/models/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(1,
      'Biryani',
      'This is chicken biryani',
      'https://www.cookwithnabeela.com/wp-content/uploads/2023/03/MuttonBiryani.webp',
      [
        new Ingredient('Rice', 10),
        new Ingredient('Meat', 100)
      ]),
    new Recipe(2,
      'Fried Rice',
      'This is fried rice',
      'https://www.allrecipes.com/thmb/G96Vc_7F5Dm0csJJb2STC6tO97k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79543-fried-rice-restaurant-style-mfs-49-79b33da67e2643e8b585972cd92c5821.jpg',
      [
        new Ingredient('Rice', 10),
        new Ingredient('Prawn', 100)
      ]),
    new Recipe(3,
      'Steamed Rice',
      'This is steamed rice',
      'https://static.independent.co.uk/2021/11/18/16/newFile.jpg',
      [
        new Ingredient('Rice', 10),
        new Ingredient('Salt', 5)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeById(index: number): Recipe {
    return this.recipes.find(x => x.id == index);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
