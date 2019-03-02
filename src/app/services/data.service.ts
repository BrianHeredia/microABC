import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RecipesInterface } from '../recipesInterface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) {
    
  }
  private url: string = "http://localhost:4051/recipes";
  private recipes = [];
  

  getRecipes(){
    return this.http.get(this.url, {observe: 'response'});
  }

}
