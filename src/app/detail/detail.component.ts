import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor( private route: ActivatedRoute, private dataService: DataService) { }
  public recipe;

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.recipe = this.dataService.getOneRecipe(id);
  }
}
