import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  customForm: FormGroup;
  recipes: Recipe[];
  constructor(private recipeService: RecipesService, private formBuilder: FormBuilder ){ }

  ngOnInit() {
    // will be set here
    this.recipes = this.recipeService.getAllRecipes();
    this.customForm = this.formBuilder.group({
      // set default initial value
      starRating: [3]
  });
  }
  logRatingChange(rating){
    console.log('changed rating: ', rating);
}


}
