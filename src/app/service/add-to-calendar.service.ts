import { Injectable } from '@angular/core';
import { TimeLocaleService } from './time-locale.service';
import { CalendarLink } from '../calendarLink';
import * as data from '../sessions.json';

@Injectable({
  providedIn: 'root'
})
export class AddToCalendarService {

  sessionData: any = (data as any).default;
  sessions: any[] = [];
  localStartTimes: Date[] = [];
  localEndTimes: Date[] = [];

  private calendarLinks: CalendarLink[] = [];
  private sapSignUpLink: string = 'https://fiorilaunchpad.sap.com/sites#my-events&/event=10660616';

  constructor(private timeLocaleService: TimeLocaleService) { 
    this.sessions = this.sessionData.sessions;
    this.initializeLocalTime();
    this.initializeLinks();
  }

  getCalendarLinks(): CalendarLink[] {
    return this.calendarLinks;
  }

  getSAPSignUpLink(): string {
    return this.sapSignUpLink;
  }

  initializeLinks(): void {
    for (let i = 0; i < this.sessions.length; i++) {
      const sessionLinks: CalendarLink = {
        google: this.googleLink(this.sessions[i], i),
        office365: this.office365Link(this.sessions[i], i),
        ics: this.icsLink(this.sessions[i], i)
      }
      this.calendarLinks.push(sessionLinks);
    }
  }

  googleLink(session: any, i: number): string {
    if (session.minorSession || session.internal) return '';
    const startTime = this.formatTime(this.localStartTimes[i]);
    const endTime = this.formatTime(this.localEndTimes[i]);
    return [
      'https://www.google.com/calendar/event',
      '?action=TEMPLATE',
      '&text=' + this.removeForbiddenCharachters(session.topic),
      '&dates=' + startTime,
      '/' + endTime,
      '&location='+ this.getLocation(session),
      '&details=' + this.removeForbiddenCharachters(session.description) + '\n\n ' + this.getLocation(session),
      '&sprop=&sprop=name:'
    ].join('');
  }

  office365Link(session: any, i: number): string {
    if (session.minorSession || session.internal) return '';
    const startTime = this.formatTimeForOffice365(this.localStartTimes[i]);
    const endTime = this.formatTimeForOffice365(this.localEndTimes[i]);
    return encodeURI([
        'https://outlook.office365.com/owa/',
        '?path=/calendar/action/compose',
        '&rru=addevent',
        '&subject=' + this.removeForbiddenCharachters(session.topic),
        '&startdt=' + startTime,
        '&enddt=' + endTime,
        '&location=' + this.getLocation(session),
        '&body=' + this.removeForbiddenCharachters(session.description) + '\n\n ' + this.getLocation(session)
    ].join(''));
  }

  icsLink(session: any, i: number): string {
    if (session.minorSession || session.internal) return '';
    const startTime = this.formatTime(this.localStartTimes[i]);
    const endTime = this.formatTime(this.localEndTimes[i]);
    var cal = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      'DTSTART:' + startTime,
      'DTEND:' + endTime,
      'SUMMARY:' + this.removeForbiddenCharachters(session.topic),
      'LOCATION:' + this.getLocation(session),
      'DESCRIPTION:' + this.removeForbiddenCharachters(session.description) + '\\n\\n ' + this.getLocation(session),
      'UID:' + session.id,
      'END:VEVENT',
      'END:VCALENDAR'].join('\n');
    return encodeURI('data:text/calendar;charset=utf8,' + cal);
  }

  formatTime(date: Date): string {
    return date? date.toISOString().replace(/-|:|\.\d\d\d/g,"") : '';
  }

  formatTimeForOffice365(date: Date): string {
    // requries format of 2014-02-02T18:00:00
    return date.toISOString();
  }

  getLocation(session: any): string {
    if (session.internal) {
      return '';
    } else if (session.minorSession) {
      return '';
    } else if (session.hangOut) {
      // TODO: add gather.town link
      return '';
    }
    return 'https://broadcast.co.sap.com/go/fdconf';
  }

  removeForbiddenCharachters(text: any): string {
    const forbiddenCharacters = new RegExp('#', 'g');
    if (typeof text === 'string') {
      return text.replace(forbiddenCharacters, '');
    }
    return '';
  }

  initializeLocalTime(): void {
    const UTCStartTimes = this.timeLocaleService.getSessionUTCStartTime();
    for (let i = 0; i < UTCStartTimes.length; i++) {
      let UTCTime = UTCStartTimes[i];
      this.localStartTimes.push(new Date(UTCTime));
      const min = UTCTime.getMinutes();
      this.localEndTimes.push(new Date(UTCTime.setMinutes(min + this.sessions[i].duration)));
    }
  }
}
