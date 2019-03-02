import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private url: string = "http://localhost:4051/recipes";
  private recipes = [15];
  
  ngOnInit() {
    return this.http.get(this.url, {observe: 'response'}).subscribe( response => {
      for(let i = 0; i < 15; i++){
        this.recipes[i] = response.body[i];
        console.log(this.recipes[i]);
        //this.recipesImg[i] = response.body[i].image;
      }
    });  
  }
  
}
