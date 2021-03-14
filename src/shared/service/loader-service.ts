import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    isLoading$: Observable<boolean> = this.loading.asObservable()
}