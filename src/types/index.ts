export type Category = {
    strCategory: string;
}
export type Meal = {
    strMeal:string,
    strMealThumb:string,
    idMeal:string
}
export type SearchForm = {
    search:string
  }

//objeto dinamico
export type MealDetails = {
    [key:string]:string
}