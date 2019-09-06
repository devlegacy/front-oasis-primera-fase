import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time12'
})
export class Time12Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!value) { return ''; }
    let time = value;
    let hour = +time.substr(0, 2);
    let suffix = hour < 12 ? " AM" : " PM";

    let currentHour = (hour % 12) || 12;
    let formatHour = (currentHour < 10) ? ("0" + currentHour) : currentHour;  // leading 0 at the left for 1 digit hours

    time = formatHour + time.substr(2, 3) + suffix;
    return time;
  }

}
