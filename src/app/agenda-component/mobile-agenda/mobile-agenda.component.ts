import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TimeLocaleService } from '../../service/time-locale.service';
import { AddToCalendarService } from '../../service/add-to-calendar.service';
import { CalendarLink } from '../../calendarLink';
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
  sessionCalendarLinks: CalendarLink[] = [];

  constructor(
      private timeLocaleService: TimeLocaleService,
      private addToCalendarService: AddToCalendarService,
      private domSanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.sessions = this.sessionData.sessions;
    this.sessionCalendarLinks = this.addToCalendarService.getCalendarLinks();
    this.dayLabel = this.timeLocaleService.getDayLabel(false);
    this.altDateLabel = this.timeLocaleService.getAltDateLabel();
    this.timezoneLabel = this.timeLocaleService.getTimezoneLabel();
    this.adjustMenu();
  }

  ngAfterViewInit(): void {
    this.initializeSessions();
    this.openFirstSession();
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

  openFirstSession(): void {
    const firstSession = document.querySelectorAll('.session')[0] as HTMLElement;
    const controlButton = firstSession.querySelector('.control-button') as HTMLElement;
    firstSession.querySelector('.session-description')?.classList.add('description-expanded');
    controlButton.classList.add('show-button');
    this.highlightSession(firstSession);
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

  getCalendarLink(i: number, calendarType: string): string | SafeUrl {
    if (calendarType === 'google') {
      return this.sessionCalendarLinks[i].google;
    } else if (calendarType === 'office365') {
      return this.sessionCalendarLinks[i].office365;
    } else if (calendarType === 'ics') {
      return this.domSanitizer.bypassSecurityTrustUrl(this.sessionCalendarLinks[i].ics);
    }
    return '';
  }

  getInternalSessionLink(): string {
    return this.addToCalendarService.getSAPSignUpLink();
  }

  getSlidesLink(name: string): string {
    return `../../../assets/slides/${name}.pdf`;
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
