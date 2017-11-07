import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  
  date=new Date(1994,5,5);
  arr : number[] =[5,43,56,1,0];
  imageUrl :string ="";
  constructor() { }

  ngOnInit() {
  }

}
