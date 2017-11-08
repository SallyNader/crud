import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formProp;
  constructor() { }

  ngOnInit() {


    this.formProp = new FormGroup({
      firstName: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(3)

      ])),
      lastName: new FormControl("",this.textValidator),
      languages: new FormControl(""),
    });
  }

 //custom validator
  textValidator(control){
    if(control.value.length < 3)
      return {'lastname' : true};



  }


  onSubmit(user) {

    console.log(user);
  }

}
