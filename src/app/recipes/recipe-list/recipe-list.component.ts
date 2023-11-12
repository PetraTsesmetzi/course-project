import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simply test',
      'https://cdn.pixabay.com/photo/2018/06/01/20/28/chicken-3447092_1280.jpg'
    ),
    new Recipe(
      'A Test Recipe2',
      'This is a simply test2',
      'https://cdn.pixabay.com/photo/2018/06/01/20/28/chicken-3447092_1280.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}
  onRecipeSelected(recipe: Recipe) {
    console.log('onRecipeSelected');
    this.recipeWasSelected.emit(recipe);
  }
}
