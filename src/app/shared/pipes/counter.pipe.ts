import { CounterService } from './../counter/counter.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {

constructor(private cs: CounterService){

}
  transform(items: any[], args?: any): any {
  return items.filter(item => this.cs.getCount(item.itemKey) > 0);
  }

}
