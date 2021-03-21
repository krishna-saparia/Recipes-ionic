import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe: Recipe;
  constructor( private recipeService: RecipesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // params map vs snapshot
    this.activatedRoute.paramMap.subscribe(params => {
      if (!params.has('recipeId')){
        // rediret and return
        return;
      }
      else{
        this.recipe = this.recipeService.getRecipe(params.get('recipeId'));
      }

    }
       );

  }



}
