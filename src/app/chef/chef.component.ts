import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  constructor(private dataService: DataService) { }
  public info;

  ngOnInit() {
    this.info = this.dataService.getRestInfo();
  }

}
