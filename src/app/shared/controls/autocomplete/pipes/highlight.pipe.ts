

import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'highlight33'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, search: string): string {

    const re1 = new RegExp(search, 'gi');

    return value.replace(re1, match => '<b>' + match + '</b>');
  }

}
