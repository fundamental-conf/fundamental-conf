import { Component, OnInit, Input } from '@angular/core';
import * as smoothScroll from 'smoothscroll-polyfill';
import * as data from '../speakers.json';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  playAnimation: boolean = true;
  animationTime: number = 3000;
  
  sideMenu: boolean = false;
  halfSize: boolean = false;
  options = { threshold: 0.7 };
  mobileThreshold: number = 640;
  speakerData: any = (data as any).default;
  speakers: any[] = [];
  totalNumSpeaker: number = 0;

  @Input() conferenceTime: string = '';
  @Input() timezone: string = '';

  constructor() {
    smoothScroll.polyfill();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.playAnimation = false;
    }, this.animationTime);
    
    setTimeout(() => {
      this.adjustMenu();
      this.speakers = this.speakerData.speakers;
      this.totalNumSpeaker = this.speakers.length;
      this.initializeNavbar();
    }, this.animationTime);
  }

  toggleMenu(): void {
    this.sideMenu = !this.sideMenu;
  }

  // shrink the menu bar when scroll down 
  // expand the menu bar when scroll back to top
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

  initializeNavbar(): void {
    const animationSection = document.getElementById('animation') as HTMLElement;
    const dateSection = document.getElementById('date') as HTMLElement;
    const infoSection = document.getElementById('info') as HTMLElement;
    const speakerSection = document.getElementById('speaker') as HTMLElement;
    const animationNavbox = document.querySelectorAll('.nav-box')[0] as HTMLElement;
    const dateNavbox = document.querySelectorAll('.nav-box')[1] as HTMLElement;
    const infoNavbox = document.querySelectorAll('.nav-box')[2] as HTMLElement;
    const speakerNavbox = document.querySelectorAll('.nav-box')[3] as HTMLElement;

    if (window.innerWidth <= this.mobileThreshold) {
      // navbar for phones
      let observer = new IntersectionObserver(this.navCheck, this.options);
      observer.observe(animationSection);
      observer.observe(dateSection);
      observer.observe(speakerSection);
      // manually add Info section because it's using fixed position
      window.addEventListener('scroll', () => {
        const coord = infoSection.getBoundingClientRect();
        if (coord.top < 115 && coord.top > -990) {
          this.resetNavbar();
          infoNavbox.classList.add('active');
        }
      });
    } else {
      // navbar for tablets
      if (window.scrollY === 0) {
        animationNavbox.classList.add('active');
      }
      window.addEventListener('scroll', () => {
        this.resetNavbar();
        const y = window.scrollY;
        if (y < 400) {
          animationNavbox.classList.add('active');
        } else if (y >= 400 && y < 900) {
          dateNavbox.classList.add('active');
        } else if (y >= 900 && y < 2000) {
          infoNavbox.classList.add('active');
        } else if (y >= 2000) {
          speakerNavbox.classList.add('active');
        }
      });
    }
  }

  navCheck(entries: any): void {
    entries.forEach((entry:any) => {
        if (entry.isIntersecting) {
          const navboxes = document.querySelectorAll('.nav-box');
          const id = entry.target.id;
          const activeBox = document.querySelector(`[data-page=${id}]`) as HTMLElement;
          navboxes.forEach(navbox => {
            navbox.classList.remove('active');
          });
          activeBox.classList.add('active');
        }
    });
  }

  resetNavbar(): void {
    const navboxes = document.querySelectorAll('.nav-box');
    navboxes.forEach(navbox => {
      navbox.classList.remove('active');
    });
  }

  scroll($element: any): void {
    const target = document.getElementById(`${$element.id}`) as HTMLElement;
    const yOffSet = this.halfSize ? -110 : -135;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffSet;
    window.scrollTo({top: y, behavior: 'smooth'});
  }

  getImgSrc(name: string): string {
    return "../../assets/speakers/mobile/" + name + ".jpg";
  }
}
