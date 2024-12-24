import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true
})
export class PricePipe implements PipeTransform {

  transform(value: unknown, price: 'single' | 'total') {
    if (price === 'single') {
      return `${value} 🪙`
    }
    if (price === 'total') {
      return `${value} /-`
    }
    return value;
  }

}
