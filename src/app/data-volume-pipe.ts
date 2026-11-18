import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataVolume',
})
export class DataVolumePipe implements PipeTransform {
  transform(value: number): string {
    if (value < 1024) {
      return `${value} Mo`
    }
    if (value >= 1024) {
      const valueGo = Math.round(value / 1024)
      return `${valueGo} Go`
    }

    return '';
  }
}
