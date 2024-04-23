import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noWhiteSpaces',
})
export class NoWhiteSpacesPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\s/g, '');
  }
}
