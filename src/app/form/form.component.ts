import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formProp;
  constructor() { }

  ngOnInit() {

    this.formProp=new FormGroup({
      firstName:new FormControl("sally"),
      lastName:new FormControl(""),
      languages:new FormControl(""),       
    });
  }
  onSubmit(user){

    console.log(user);
  }

}
