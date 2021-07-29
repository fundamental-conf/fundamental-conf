import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TimeLocaleService } from '../../time-locale.service';
import * as data from '../../sessions.json';

@Component({
  selector: 'app-desktop-agenda',
  templateUrl: './desktop-agenda.component.html',
  styleUrls: ['./desktop-agenda.component.scss']
})
export class DesktopAgendaComponent implements OnInit, AfterViewInit {

  timezoneLabel: string = '';
  dayLabel: string = '';
  altDateLabel: string = '';

  sessionData: any = (data as any).default;
  sessions: any[] = [];

  constructor(private timeLocaleService: TimeLocaleService) { }

  ngOnInit(): void {
    this.timezoneLabel = this.timeLocaleService.getTimezoneLabel();
    this.dayLabel = this.timeLocaleService.getDayLabel(true);
    this.altDateLabel = this.timeLocaleService.getAltDateLabel();
    this.sessions = this.sessionData.sessions;
  }

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
    this.initializeSession();
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

  initializeSession(): void {
    const sessions = document.querySelectorAll('.session');
    const sessionDetails = document.querySelectorAll('.session-detail');
    const sessionPreviews = document.querySelectorAll('.session-preview');
    const controlButtons = document.querySelectorAll('.control-button');

    sessionDetails.forEach(session => {
      const index = this.findNodeIndex(session, sessionDetails);
      session.addEventListener('mouseover', () => {
        if (sessionPreviews[index] && !this.sessions[index].minorSession) {
          (sessionPreviews[index] as HTMLElement).classList.add('preview-revealed');
          (sessions[index] as HTMLElement).classList.add('session-highlighted');
          (controlButtons[index] as HTMLElement).classList.add('button-revealed');
        }
      });
      session.addEventListener('mouseout', () => {
        if (sessionPreviews[index] && !this.sessions[index].minorSession) {
          (sessionPreviews[index] as HTMLElement).classList.remove('preview-revealed');
          (sessions[index] as HTMLElement).classList.remove('session-highlighted');
          (controlButtons[index] as HTMLElement).classList.remove('button-revealed');
        }
      });
    });
  }

  toggleSession(i: number): void {
    if (this.sessions[i].minorSession) {
      return;
    }
    const controlButtons = document.querySelectorAll('.control-button');
    const speakerInfos = document.querySelectorAll('.speaker-info');
    const sessionPreviews = document.querySelectorAll('.session-preview');
    if ((controlButtons[i] as HTMLElement).classList.contains('close-button')) {
      // currently expanded
      (controlButtons[i] as HTMLElement).classList.remove('close-button');
      (speakerInfos[i] as HTMLElement).classList.remove('info-expanded');
      (sessionPreviews[i] as HTMLElement).classList.remove('fully-expanded');
    } else {
      (controlButtons[i] as HTMLElement).classList.add('close-button');
      (speakerInfos[i] as HTMLElement).classList.add('info-expanded');
      (sessionPreviews[i] as HTMLElement).classList.add('fully-expanded');
    }
  }

  getImgSrc(name: string): string {
    return "../../assets/speakers/agenda_avatar/" + name + ".png";
  }

  private findNodeIndex(node: Node, list: NodeList): number {
    for (let i = 0; i < list.length; i++) {
      if (node === list[i]) {
        return i;
      }
    }
    return -1;
  }
}
