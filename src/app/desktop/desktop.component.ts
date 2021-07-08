import { Component, OnInit } from '@angular/core';
import * as data from '../speakers.json';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  speakerData: any = (data as any).default;
  speakers: any[] = [];
  totalNumSpeaker: number = 0;

  conferenceTime: string = '';
  timezone: string = '';
  startTimeUTC: number = 14;
  endTimeUTC: number = 18;

  options = { threshold: 0.6 };
  

  constructor() { }

  ngOnInit(): void {
    this.speakers = this.speakerData.speakers;
    this.totalNumSpeaker = this.speakers.length;
    this.initializeAnimation();
    this.customizeTime();
  }
  
  getImgSrc(name: string): string {
    return "../../assets/speakers/" + name + ".jpeg";
  }

  initializeAnimation(): void {
    const observer = new IntersectionObserver(this.navCheck, this.options);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  navCheck(entries: any): void {
    entries.forEach((entry:any) => {
        if (entry.isIntersecting) {
          const dateSection = document.querySelector('.date') as HTMLElement;
          const speakerSection = document.querySelector('.speakers') as HTMLElement;
          const infoCards = document.querySelectorAll('.card');

          // reset all sections
          dateSection.classList.remove('active');
          speakerSection.classList.remove('active');
          infoCards.forEach((card) => {
            (card as HTMLElement).classList.remove('active');
          })

          const className = entry.target.className;
          if (className === 'date' || className === 'speakers') {
            const activeSection = document.querySelector(`.${className}`) as HTMLElement;
            activeSection.classList.add('active');
          } else if (className === 'info') {
            infoCards.forEach((card) => {
              (card as HTMLElement).classList.add('active');
            });
          }
        }
    });
  }

  customizeTime(): void {
    // set up timezone
    const offset = new Date().getTimezoneOffset();
    if (offset > 0) {
      this.timezone = timezoneMap1[offset];
    } else {
      this.timezone = timezoneMap2[-offset];
    }
    
    // set up time
    const hourDiff = offset / 60;
    let startTag = '';
    let endTag = '';
    let localStart = this.startTimeUTC - hourDiff;
    let localEnd = this.endTimeUTC - hourDiff;
    if (localStart > 12) {
      localStart = localStart % 12;
      startTag = 'PM';
    } else {
      startTag = 'AM';
    }
    if (localEnd > 12) {
      localEnd = localEnd % 12;
      endTag = 'PM';
    } else {
      endTag = 'AM';
    }
    this.conferenceTime = localStart + ' ' + startTag + ' - ' + localEnd + ' ' + endTag;
  }

}

const timezoneMap1: { [key: number]: string } = {
  // GMT-7
  420 : 'PDT',
  // GMT-6
  360 : 'CST',
  // GMT-5
  300 : 'EST',
  // GMT-4
  240 : 'EDT',
  // GMT-3
  180 : 'ADT',
  // GMT-2
  120 : 'GMT-2',
  // GMT-1
  60 : 'GMT-1'
};  

const timezoneMap2: { [key: number]: string } = {
  // GMT
  0 : 'WET',
  // GMT+1
  60 : 'CET',
  // GMT+2
  120 : 'EET',
  // GMT+3
  180 : 'EST',
  // GMT+4
  240 : 'MSK'
}; 
