import { Component, OnInit } from '@angular/core';

import {MovielistService}  from '../services/movelist/movielist.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 user:string="hello it is me";
  listItems:any[];
  constructor(private _movelist:MovielistService) {

this.listItems=this._movelist.getItems();
   }

  ngOnInit() {
  }

}
