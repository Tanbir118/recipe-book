import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const recipeId = param['id'];
      this.selectedRecipe = this.recipeService.getRecipeById(recipeId);
    });
  }

  onAddToShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }

  onEditRecipe(): void {
    this.router.navigate(['edit', this.selectedRecipe.id], {relativeTo: this.route.parent});
  }
}
