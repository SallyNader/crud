import { Directive ,ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  constructor(private _ele:ElementRef) { }


  @HostListener('mouseenter') onmouseenter(){

    this._ele.nativeElement.style.fontWeight='bold';
  }

  @HostListener('mouseleave') onmouseleave(){

 this._ele.nativeElement.style.fontWeight=null;

  }

}
