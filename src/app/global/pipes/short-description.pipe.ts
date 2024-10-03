import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription',
  standalone: true,
})
export class ShortDescriptionPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (typeof value !== 'string') {
      return value; // Retorna el valor original si no es un string
    }

    // Limita el texto a 15 caracteres
    const maxLength = 15;
    if (value.length > maxLength) {
      return value.substring(0, maxLength) + '...'; // Agrega '...' si se corta el texto
    }

    return value; // Retorna el texto original si no se corta
  }
}
