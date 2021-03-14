import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { urls } from "../APIUrl";
import { map, switchMap } from 'rxjs/operators';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ZomatoService {
    constructor(private http: HttpClient) { }

    getAllCategoriesByCity(city: string): Observable<ICuisinePayload> {
        const url = urls.getCityDetails.replace('[CITY]', city)

        return this.http.get(url).pipe(
            switchMap((cityDetails: any) => {
                const cityId = cityDetails?.location_suggestions[0]?.id
                return this.getAllCategories(cityId)
            })
        )
    }

    getAllCategories(cityId: number): Observable<ICuisinePayload> {
        const url = urls.getCategories.replace('[CITY_ID]', cityId.toString())

        return this.http.get(url).pipe(
            map((data: any) => { return { categories: data?.cuisines, cityId: cityId } })
        ) as Observable<ICuisinePayload>
    }

    getAllRestaurants(params: IRestaurantParams) {
        const url = urls.getRestaurants.replace('[CITY_ID]', params.cityId.toString()).replace('CUISINE_ID', params.cuisineId.toString())

        return this.http.get(url).pipe(map((restaurantData: any) => transformData(restaurantData)))
    }
}

function transformData(restaurantData: any) {
    if (restaurantData.restaurants) {
        return restaurantData.restaurants.map((data: any) => {
            const location = data.restaurant?.location
            return {
                name: data.restaurant?.name,
                address: location?.address,
                latitude: location?.latitude,
                longitude: location?.longitude,
                locality: location?.locality,
                averageCostForTwo: data.restaurant.average_cost_for_two
            }
        })
    }
}

export interface ICuisineCategory {
    cuisine: {
        cuisine_id: number;
        cuisine_name: string;
    }
}


export interface ICuisinePayload {
    categories: ICuisineCategory[],
    cityId: number 
}

export interface IRestaurantParams {
    cityId: number;
    cuisineId: number
}