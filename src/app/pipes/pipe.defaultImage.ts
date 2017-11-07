import { Pipe , PipeTransform} from '@angular/core';
@Pipe({

    name:'defaultImage'
})


export class PipeDefaultImage implements PipeTransform{


    transform(imageValue? : string ) :string
    {
     let image="";

     if(imageValue){

       image =imageValue;

     }else{

        image ='http://s3.amazonaws.com/uifaces/faces/twitter/sillyleo/128.jpg'
        return image;
     }

    }
}

