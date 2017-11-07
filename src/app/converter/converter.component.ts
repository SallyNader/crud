import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl} from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
 formPro;
  constructor() { }

  ngOnInit() {
    this.formPro =new FormGroup({

     decimal : new FormControl(''),
     binary:new FormControl(''),
     octal:new FormControl(''),
     hexa :new FormControl('')


    });
  }


  decimalChanged(oldVal , newVal){

     if(newVal != ""){
      this.formPro.patchValue({binary : parseInt(newVal,10).toString(2)});
      this.formPro.patchValue({octal:parseInt(newVal,10).toString(8)});   
      this.formPro.patchValue({hexa:parseInt(newVal,10).toString(16)});   
      
     }else{

      this.formPro.patchValue({binary : ""});
      this.formPro.patchValue({octal:""});   
      this.formPro.patchValue({hexa:""});   

     }

  }

}
