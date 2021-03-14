export const urls = {
    getCityDetails: 'https://developers.zomato.com/api/v2.1/cities?q=[CITY]',
    getCategories: 'https://developers.zomato.com/api/v2.1/cuisines?city_id=[CITY_ID]',
    getRestaurants: 'https://developers.zomato.com/api/v2.1/search?city_id=[CITY_ID]&cuisines=[CUISINE_ID]&order=asc&count=20'
}