import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/shared/service/loader-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'zomato';
  isLoading: boolean = false;

  constructor(
    public loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.loaderService.isLoading$.subscribe(loading => this.isLoading = loading)
  }
}
