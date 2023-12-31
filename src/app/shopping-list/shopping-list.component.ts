import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientChangedSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
      this.ingredients = this.shoppingListService.getIngredients();

      this.ingredientChangedSub = this.shoppingListService.ingredientsChanged
      .subscribe(ingredients => {
        this.ingredients = ingredients;
      });
  }

  ngOnDestroy(): void {
    this.ingredientChangedSub.unsubscribe();
  }
}
