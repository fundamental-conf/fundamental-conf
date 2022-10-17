import { Injectable } from '@angular/core';
import * as data from '../sessions.json';
import { TimeStamp } from '../timestamp';

@Injectable({
  providedIn: 'root'
})
export class TimeLocaleService {

  offset: number = 0;
  startTimeUTC: number = 14;
  endTimeUTC: number = 20;
  fraction: boolean = false;
  UTCStart = new Date(Date.UTC(2021, 7, 11, 14, 0, 0));

  sessionData: any = (data as any).default;
  sessions: any[] = [];

  constructor() { 
    this.offset = new Date().getTimezoneOffset();
    this.sessions = this.sessionData.sessions;
  }

  getSessionUTCStartTime(): Date[] {
    // UTC start time of each session
    let res: Date[] = [];
    this.sessions.forEach(session => {
      const startTime = new Date(Date.UTC(2021, 7, 11, session.UTCHour, session.UTCMinute, 0));
      res.push(startTime);
    });
    return res;
  }

  getSessionLocalStartTime(): TimeStamp[] {
    // Local start time of each session
    let res: TimeStamp[] = [];
    const UTCTimes = this.getSessionUTCStartTime();
    UTCTimes.forEach((UTCTime) => {
      const localHour = UTCTime.getHours();
      const localMinute = UTCTime.getMinutes();
      res.push({hour: localHour, minute: localMinute});
    });
    return res;
  }

  getDayLabel(longFormat: boolean): string {
    const hourOffset = this.offset / 60;
    const localStart = this.startTimeUTC - hourOffset;
    if (localStart <= 0 || localStart >= 24) {
      return longFormat? 'Thursday' : 'THUR';
    } else {
      return longFormat? 'Wednesday' : 'WED';
    }
  }

  getDateLabel(): string {
    let date = '';
    const hourOffset = this.offset / 60;
    const localStart = this.startTimeUTC - hourOffset;
    if (localStart <= 0 || localStart >= 24) {
      date = '12';
    } else {
      date = '11';
    }
    return 'August ' + date;
  }

  getAltDateLabel(): string {
    const hourOffset = this.offset / 60;
    const localStart = this.startTimeUTC - hourOffset;
    if (localStart <= 0 || localStart >= 24) {
      return '08.12.';
    } else {
      return '08.11.';
    }
  }

  getTimeLabel(): string {
    const hourOffset = Math.abs(this.offset) / 60;
    let localStartHour, localEndHour, localStartTag, localEndTag;

    if (this.offset > 0) {
      localStartHour = this.startTimeUTC - hourOffset;
      localEndHour = this.endTimeUTC - hourOffset;
    } else {
      localStartHour = this.startTimeUTC + hourOffset;
      localEndHour = this.endTimeUTC + hourOffset;
    }
    localStartHour = Math.floor(localStartHour);
    localEndHour = Math.floor(localEndHour);

    localStartTag = (localStartHour % 24) < 12 ? 'AM' : 'PM';
    localEndTag = (localEndHour % 24) < 12 ? 'AM' : 'PM';

    if (localStartHour !== 12) {
      localStartHour = localStartHour % 12;
    }
    if (localEndHour !== 12) {
      localEndHour = localEndHour % 12;
    }

    if (this.offset % 60 === 0) {
      return `${localStartHour} ${localStartTag} - ${localEndHour} ${localEndTag}`;
    } else {
      this.fraction = true;
      return `${localStartHour}:30 ${localStartTag} - ${localEndHour}:30 ${localEndTag}`;
    }
  }

  getTimezoneLabel(): string {
    let sign = '';
    let hour = '';
    let hourOffset = Math.floor(Math.abs(this.offset / 60));
    if (this.offset > 0) {
      sign = '-';
    } else if (this.offset < 0) {
      sign = '+'
    }
    if (this.offset !==0 && this.offset % 60 === 0) {
      hour = `${hourOffset}:00`;
    } else if (this.offset !==0 && this.offset % 60 !== 0) {
      hour = `${hourOffset}:30`;
    }
    return `GMT (${sign}${hour})`;
  }

  isFraction(): boolean {
    return this.fraction;
  }
}
