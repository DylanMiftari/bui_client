import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remainTimeInMinute'
})
export class RemainTimeInMinutePipe implements PipeTransform {

  transform(value: number | undefined): string {
    if(value === undefined) {
      return '';
    }
    return `${Math.floor(value/60)}h ${value%60}min`;
  }

}
