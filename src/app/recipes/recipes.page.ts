import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.module';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes : Recipe[] = [
    {
    id : 'r1',
    title : 'Schnitzel',
    imageUrl : 'https://img.kurio.network/lmdcwGqec6KOz9ms-M6DjDiUxYs=/440x440/filters:quality(80)/https://kurio-img.kurioapps.com/21/03/08/4d6e9074-8c05-4bbf-b98c-e25d6ad4cf4b.jpe',
    ingredients : ['french fries', 'pork meat', 'Salad']
  },
  {
    id : 'r1',
    title : 'Schnitzel',
    imageUrl : 'https://img.kurio.network/lmdcwGqec6KOz9ms-M6DjDiUxYs=/440x440/filters:quality(80)/https://kurio-img.kurioapps.com/21/03/08/4d6e9074-8c05-4bbf-b98c-e25d6ad4cf4b.jpe',
    ingredients : ['french fries', 'pork meat', 'Salad']
  }]

  constructor() { }

  ngOnInit() {
  }

}
