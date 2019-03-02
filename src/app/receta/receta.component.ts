import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  constructor( private dataService: DataService) { }
  
  public recetas = [];

  ngOnInit() {
    this.recetas = this.dataService.getRecipes();
  }
  
}
