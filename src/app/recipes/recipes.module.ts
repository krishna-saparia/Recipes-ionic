import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipesPageRoutingModule } from './recipes-routing.module';
import { RecipesPage } from './recipes.page';
import { StarRatingModule } from 'ionic4-star-rating';
import { ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RecipesPageRoutingModule,
    StarRatingModule
  ],
  declarations: [RecipesPage]
})
export class RecipesPageModule {}
