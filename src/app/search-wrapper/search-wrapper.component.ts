import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICuisinePayload, IRestaurantParams, ZomatoService } from 'src/shared/service/zomato-service';

@Component({
  selector: 'app-search-wrapper',
  templateUrl: './search-wrapper.component.html',
  styleUrls: ['./search-wrapper.component.less']
})
export class SearchWrapperComponent implements OnInit {
  cuisineCategory: any;
  restaurantsList$: Observable<any> = of([]);
  count = 0

  constructor(
    private zomatoService: ZomatoService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  getAllCategoriesByCity(city: string) {
    this.zomatoService.getAllCategoriesByCity(city.toLowerCase()).subscribe(
      (cuisineData: ICuisinePayload) => {
        this.cuisineCategory = cuisineData
        this.count = 1
        this.cdr.detectChanges()
        console.log('cuisineCategory par', this.cuisineCategory)
      },
      (err) => console.error(err)
    )
  }

  onCuisineCategoryChange(cuisineDetails: IRestaurantParams) {
    console.log('sele par')
    this.restaurantsList$ = this.zomatoService.getAllRestaurants(cuisineDetails)
  }

}

