import { Component, OnInit } from '@angular/core';
import { TimeLocaleService } from '../../service/time-locale.service';
import * as data from '../../speakers.json';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  playAnimation: boolean = true;
  animationTime: number = 3900;

  speakerData: any = (data as any).default;
  speakers: any[] = [];
  totalNumSpeaker: number = 0;

  options = { threshold: 0.2 };

  conferenceDate: string = '';
  conferenceTime: string = '';
  timezone: string = '';

  constructor(private timeLocalService: TimeLocaleService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.playAnimation = false;
    }, this.animationTime);

    setTimeout(() => {
      this.speakers = this.speakerData.speakers;
      this.totalNumSpeaker = this.speakers.length;
      this.initializeAnimation();
    }, (this.animationTime + 250));
    
    this.conferenceDate = this.timeLocalService.getDateLabel();
    this.conferenceTime = this.timeLocalService.getTimeLabel();
    this.timezone = this.timeLocalService.getTimezoneLabel();
  }
  
  getImgSrc(name: string): string {
    return "../../assets/speakers/" + name + ".jpg";
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
          const infoCards = document.querySelectorAll('.card');
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

}

