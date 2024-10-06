import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription',
  standalone: true,
})
export class ShortDescriptionPipe implements PipeTransform {
  // string value
  transform(value?: string): unknown {
    // know typeof value
    if (typeof value !== 'string') {
      return value; // return original value if is'nt an string
    }

    // max 15 characters
    const maxLength = 25;
    if (value.length > maxLength) {
      return value.substring(0, maxLength) + '...'; // just for continuing text
    }

    return value; // return original value if is'nt an string
  }
}
