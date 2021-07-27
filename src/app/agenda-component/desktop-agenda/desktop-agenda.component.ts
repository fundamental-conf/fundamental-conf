import { Component, OnInit } from '@angular/core';
import { TimeLocaleService } from '../../time-locale.service';
import * as data from '../../sessions.json';

@Component({
  selector: 'app-desktop-agenda',
  templateUrl: './desktop-agenda.component.html',
  styleUrls: ['./desktop-agenda.component.scss']
})
export class DesktopAgendaComponent implements OnInit {

  timezoneLabel: string = '';

  sessionData: any = (data as any).default;
  sessions: any[] = [];

  constructor(private timeLocaleService: TimeLocaleService) { }

  ngOnInit(): void {
    this.timezoneLabel = this.timeLocaleService.getTimezoneLabel();
    this.sessions = this.sessionData.sessions;
  }

  getTimeLabel(i: number): string {
    let label = '';
    const localStartTimes = this.timeLocaleService.getSessionLocalStartTime();
    const hour = localStartTimes[i].hour;
    const min = localStartTimes[i].minute;
    if (min < 10) {
      return `${hour}:0${min}`;
    }
    return `${hour}:${min}`;
  }
}
