import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// poc and assignments
import { BasicsComponent } from './assignments/basics/basics.component';
import { EvenListenerComponent } from './assignments/components-databinding/even-listener/even-listener.component';
import { GameControlComponent } from './assignments/components-databinding/game-control/game-control.component';
import { OddListenerComponent } from './assignments/components-databinding/odd-listener/odd-listener.component';
import { TestComponentComponent } from './assignments/component-attribute/testcomponent.component';

// recipe book
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

// shared items
import { DropdownShowDirective } from './shared/directives/dropdown-show.directive';

//services
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { TestFormComponent } from './assignments/forms/test-form.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    GameControlComponent,
    OddListenerComponent,
    EvenListenerComponent,
    TestComponentComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownShowDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    TestFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
