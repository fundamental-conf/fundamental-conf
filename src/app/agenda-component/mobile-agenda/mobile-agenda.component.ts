import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TimeLocaleService } from '../../service/time-locale.service';
import { AddToCalendarService } from '../../service/add-to-calendar.service';
import * as data from '../../sessions.json';

@Component({
  selector: 'app-mobile-agenda',
  templateUrl: './mobile-agenda.component.html',
  styleUrls: ['./mobile-agenda.component.scss']
})
export class MobileAgendaComponent implements OnInit, AfterViewInit {

  sideMenu: boolean = false;
  halfSize: boolean = false;

  dayLabel: string = '';
  altDateLabel: string = '';
  timezoneLabel: string = '';

  sessionData: any = (data as any).default;
  sessions: any[] = [];

  constructor(
      private timeLocaleService: TimeLocaleService,
      private addToCalendarService: AddToCalendarService
    ) { }

  ngOnInit(): void {
    this.sessions = this.sessionData.sessions;
    this.dayLabel = this.timeLocaleService.getDayLabel(false);
    this.altDateLabel = this.timeLocaleService.getAltDateLabel();
    this.timezoneLabel = this.timeLocaleService.getTimezoneLabel();
    this.adjustMenu();
  }

  ngAfterViewInit(): void {
    this.initializeSessions();
  }

  initializeSessions(): void {
    const sessions = document.querySelectorAll('.session');
    const controlButtons = document.querySelectorAll('.control-button');

    sessions.forEach(session => {
      const sessionDescription = session.querySelector('.session-description') as HTMLElement;
      const sessionTitle = session.querySelector('.session-title');
      const controlButton = session.querySelector('.control-button') as HTMLElement;
      sessionTitle?.addEventListener('click', () => {
        if (!!sessionDescription && !sessionDescription.classList.contains('fully-expanded')) {
          sessionDescription.classList.toggle('description-expanded');
          if (controlButton) controlButton.classList.toggle('show-button');
          this.highlightSession(session);
        }
      });
    });

    controlButtons.forEach(button => {
      button = button as HTMLElement;
      button.addEventListener('click', () => {
        const speakerBio = button.parentNode?.querySelector('.speaker-bio');
        const sessionDescription = button.parentNode?.querySelector('.session-description');
        if (sessionDescription?.classList.contains('description-expanded')) {
          speakerBio?.classList.toggle('show-bio');
          sessionDescription?.classList.toggle('fully-expanded');
          button.classList.toggle('show-bio');
        }
      });
    });
  }

  private highlightSession(sessionToHighlight: any): void {
    if (sessionToHighlight.classList.contains('highlighted')) {
      sessionToHighlight.classList.remove('highlighted');
    } else {
      const sessions = document.querySelectorAll('.session');
      sessions.forEach(session => {
        session.classList.remove('highlighted');
      });
      sessionToHighlight.classList.add('highlighted');
    }
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
    return "../../assets/speakers/agenda_avatar/" + name + ".png";
  }
}
