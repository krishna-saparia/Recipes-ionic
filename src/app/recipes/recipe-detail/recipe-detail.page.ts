import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loading = true;
  recipe: Recipe;
  constructor( private recipeService: RecipesService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private alertController: AlertController) { }

  ngOnInit() {
    // params map vs snapshot
    this.activatedRoute.paramMap.subscribe(params => {
      if (!params.has('recipeId')){
        // rediret and return
        this.router.navigate(['/recipes']);
        return ;
      }
      else{
        this.recipe = this.recipeService.getRecipe(params.get('recipeId'));
        this.loading = false;
      }

    });
  }
  onDeleteRecipe() {
    this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancle'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipeService.deleteRecipe(this.recipe.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });

  }


}
