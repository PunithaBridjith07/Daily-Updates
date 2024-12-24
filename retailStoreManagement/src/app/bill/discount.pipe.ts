import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, outputType: '%' | 'status') {
    if (outputType === '%') {
      return `${value} ${outputType}`;
    } else if (outputType === 'status') {
      if (value === 0) {
        return 'Note Applied'
      }
      else if (value > 0) {
        return `Applied(${value}%)`
      }
    }
    return ''
  }

}
