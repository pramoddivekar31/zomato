import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { ICuisinePayload, IRestaurantParams } from 'src/shared/service/zomato-service';

@Component({
  selector: 'app-search-restaurant',
  templateUrl: './search-restaurant.component.html',
  styleUrls: ['./search-restaurant.component.less']
})
export class SearchRestaurantComponent implements OnInit {
  city: string | undefined;
  @Output() selectCityName: EventEmitter<string> = new EventEmitter<string>()
  @Output() onCuisineCategoryChange = new EventEmitter<IRestaurantParams>()
  @Input() cuisineCategory: any;

  constructor() { }

  ngOnInit(): void {
    console.log('cuisineCategory', this.cuisineCategory)
  }

  changeCity() {
    this.selectCityName.emit(this.city)
  }

  ngOnChanges() {
    console.log('cuisineCategory on change', this.cuisineCategory)
  }

  onCuisineSelection(event: MatSelectChange) {
    this.onCuisineCategoryChange.emit({ cityId: this.cuisineCategory?.cityId, cuisineId: event?.value })
  }
}
