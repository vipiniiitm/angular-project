import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  constructor(private dishservice: DishService,
    private promotionservice: PromotionService) { }
 
  ngOnInit() {
   
    this.dishservice.getFeaturedDish()
    .then(dishes => this.dish = dishes);
    this.promotionservice.getFeaturedPromotion()
    .then(promotion =>this.promotion= promotion);
  }
}
