import { Pipe , PipeTransform} from '@angular/core';
@Pipe({

  name : 'CustomSort'

})

export class SortPipe implements PipeTransform{

  transform(arr : any[] , args :string) : any {

      if( args === 'asc')
      {
       return arr.sort();
      }
      else
      {
          return arr.sort().reverse();
      }

  }


}