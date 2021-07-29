import { Component, OnInit } from '@angular/core';
import { TimeLocaleService } from '../../time-locale.service';
import * as data from '../../sessions.json';

@Component({
  selector: 'app-mobile-agenda',
  templateUrl: './mobile-agenda.component.html',
  styleUrls: ['./mobile-agenda.component.scss']
})
export class MobileAgendaComponent implements OnInit {

  sideMenu: boolean = false;
  halfSize: boolean = false;

  dayLabel: string = '';
  altDateLabel: string = '';
  timezoneLabel: string = '';

  sessionData: any = (data as any).default;
  sessions: any[] = [];

  constructor(private timeLocaleService: TimeLocaleService) { }

  ngOnInit(): void {
    this.sessions = this.sessionData.sessions;
    this.dayLabel = this.timeLocaleService.getDayLabel(false);
    this.altDateLabel = this.timeLocaleService.getAltDateLabel();
    this.timezoneLabel = this.timeLocaleService.getTimezoneLabel();
    this.adjustMenu();
  }

  adjustMenu(): void {
    window.addEventListener('scroll', () => {
      if (!this.sideMenu) {
        if (window.scrollY === 0) {
          this.halfSize = false;
        } else {
          this.halfSize = true;
        }
      }
    });
  }

  getTimeLabel(i: number): string {
    const localStartTimes = this.timeLocaleService.getSessionLocalStartTime();
    const hour = localStartTimes[i].hour;
    const min = localStartTimes[i].minute;
    if (min < 10) {
      return `${hour}:0${min}`;
    }
    return `${hour}:${min}`;
  }

  handleSideMenuToggle(value: boolean): void {
    this.sideMenu = value;
  }

  getImgSrc(name: string): string {
    return "../../assets/speakers/agenda_avatar/" + name + ".jpg";
  }
}
