import { Injectable, OnInit } from '@angular/core';
declare var moment: any;

@Injectable()
export class DatetimeService implements OnInit{
public pickupTime: Date;

constructor() {
}

ngOnInit(){
 }
 static days: number[] =
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  static daysOfWeek: any[] =
    typeof moment === 'undefined' ? [
      {fullName: 'Sunday', shortName: 'Su', weekend: true},
      {fullName: 'Monday', shortName: 'Mo'},
      {fullName: 'Tuesday', shortName: 'Tu'},
      {fullName: 'Wednesday', shortName: 'We'},
      {fullName: 'Thursday', shortName: 'Th'},
      {fullName: 'Friday', shortName: 'Fr'},
      {fullName: 'Saturday', shortName: 'Sa', weekend: true}
    ] : moment.weekdays().map((el, index) => {
      return {
        fullName: el,
        shortName: moment.weekdaysShort()[index].substr(0, 2)
      }
    });

  static firstDayOfWeek: number =
    typeof moment === 'undefined' ? 0 : moment.localeData().firstDayOfWeek();

  static months: any[] = typeof moment === 'undefined' ? [
    {fullName: 'January', shortName: 'Jan'},
    {fullName: 'February', shortName: 'Feb'},
    {fullName: 'March', shortName: 'Mar'},
    {fullName: 'April', shortName: 'Apr'},
    {fullName: 'May', shortName: 'May'},
    {fullName: 'June', shortName: 'Jun'},
    {fullName: 'July', shortName: 'Jul'},
    {fullName: 'August', shortName: 'Aug'},
    {fullName: 'September', shortName: 'Sep'},
    {fullName: 'October', shortName: 'Oct'},
    {fullName: 'November', shortName: 'Nov'},
    {fullName: 'December', shortName: 'Dec'}
  ] : moment.months().map((el, index) => {
    return {
      fullName: el,
      shortName: moment['monthsShort']()[index]
    }
  });

  static formatDate(d: Date, format?: string, dateOnly?: boolean): string {
    let ret: string;
    if (d && !format) {
      // return d.toLocaleString('en-us', hash); // IE11 does not understand this
      let pad0 = number => ("0" + number).slice(-2);
      ret = d.getFullYear() + '-' + pad0(d.getMonth() + 1) + '-' + pad0(d.getDate());
      ret += dateOnly ? '' : ' ' + pad0(d.getHours()) + ':' + pad0(d.getMinutes());
      return ret;
    } else if (d && moment) {
      return moment(d).format(format);
    } else {
      return '';
    }
  }

  static parseDate(dateStr: string, dateFormat?: string): Date {
    if (typeof moment === 'undefined') {
      dateStr = DatetimeService.removeTimezone(dateStr);
      dateStr = dateStr + DatetimeService.addDSTOffset(dateStr);
      return DatetimeService.parseFromDefaultFormat(dateStr);
    } else if (dateFormat) {
      let date = moment(dateStr, dateFormat).toDate();
      if (isNaN(date.getTime())) { // if dateFormat and dateStr does not match
        date = moment(dateStr).toDate(); //parse as ISO format
      }
      return date;
    }
  }

  //remove timezone
  private static removeTimezone(dateStr): string {
    // if no time is given, add 00:00:00 at the end
    let matches = dateStr.match(/[0-9]{2}:/);
    dateStr += matches ? '' : ' 00:00:00';
    return dateStr.replace(/([0-9]{2}-[0-9]{2})-([0-9]{4})/, '$2-$1')  //mm-dd-yyyy to yyyy-mm-dd
      .replace(/([\/-][0-9]{2,4})\ ([0-9]{2}\:[0-9]{2}\:)/, '$1T$2')   //reformat for FF
      .replace(/EDT|EST|CDT|CST|MDT|PDT|PST|UT|GMT/g, '')              //remove timezone
      .replace(/\s*\(\)\s*/, '')                                       //remove timezone
      .replace(/[\-\+][0-9]{2}:?[0-9]{2}$/, '')                        //remove timezone
      .replace(/000Z$/, '00');                                         //remove timezone
  }

  private static addDSTOffset(dateStr): string {
    let date = DatetimeService.parseFromDefaultFormat(dateStr);
    let jan = new Date(date.getFullYear(), 0, 1);
    let jul = new Date(date.getFullYear(), 6, 1);
    let stdTimezoneOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    let isDST = date.getTimezoneOffset() < stdTimezoneOffset;
    let offset = isDST ? stdTimezoneOffset - 60 : stdTimezoneOffset;
    let diff = offset >= 0 ? '-' : '+';
    offset = Math.abs(offset);
    return diff +
      ('0' + (offset / 60)).slice(-2) + ':' +
      ('0' + (offset % 60)).slice(-2);
  };

  private static parseFromDefaultFormat(dateStr): Date {
    let tmp = dateStr.split(/[\+\-:\ T]/); // split by dash, colon or space
    return new Date(
      parseInt(tmp[0], 10),
      parseInt(tmp[1], 10) - 1,
      parseInt(tmp[2], 10),
      parseInt(tmp[3] || '0', 10),
      parseInt(tmp[4] || '0', 10),
      parseInt(tmp[5] || '0', 10)
    );
  }

  getMonthData(year: number, month: number): any {
    year = month > 11 ? year + 1 :
      month < 0 ? year - 1 : year;
    month = (month + 12) % 12;

    let firstDayOfMonth = new Date(year, month, 1);
    let lastDayOfMonth = new Date(year, month + 1, 0);
    let lastDayOfPreviousMonth = new Date(year, month, 0);
    let daysInMonth = lastDayOfMonth.getDate();
    let daysInLastMonth = lastDayOfPreviousMonth.getDate();
    let dayOfWeek = firstDayOfMonth.getDay();

    // Ensure there are always leading days to give context
    let leadingDays = (dayOfWeek - DatetimeService.firstDayOfWeek + 7) % 7 || 7;
    let trailingDays = DatetimeService.days.slice(0, 6 * 7 - (leadingDays + daysInMonth));
    if (trailingDays.length > 7) {
      trailingDays = trailingDays.slice(0, trailingDays.length - 7);
    }

    let localizedDaysOfWeek =
      DatetimeService.daysOfWeek
        .concat(DatetimeService.daysOfWeek)
        .splice(DatetimeService.firstDayOfWeek, 7);

    let monthData = {
      year: year,
      month: month,
      fullName: DatetimeService.months[month].fullName,
      shortName: DatetimeService.months[month].shortName,
      localizedDaysOfWeek: localizedDaysOfWeek,
      days: DatetimeService.days.slice(0, daysInMonth),
      leadingDays: DatetimeService.days.slice(-leadingDays - (31 - daysInLastMonth), daysInLastMonth),
      trailingDays: trailingDays
    };

    return monthData;
  }

}
