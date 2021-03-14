import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.less']
})
export class RestaurantListComponent implements OnInit {

  @Input() restaurantsList$: Observable<any> = of([])
  constructor() { }

  ngOnInit(): void {
  }

}
