import { Component, OnInit } from '@angular/core';
import * as smoothScroll from 'smoothscroll-polyfill';
import * as data from '../speakers.json';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  sideMenu: boolean = false;
  halfSize: boolean = false;
  options = { threshold: 0.7 };
  speakerData: any = (data as any).default;
  speakers: any[] = [];
  totalNumSpeaker: number = 0;

  constructor() {
    smoothScroll.polyfill();
  }

  ngOnInit(): void {
    this.adjustMenu();
    this.initializeNavbar();
    this.speakers = this.speakerData.speakers;
    this.totalNumSpeaker = this.speakers.length;
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
    let observer = new IntersectionObserver(this.navCheck, this.options);
    let sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    })
    // manually add Info section because it's using fixed position
    const infoSection = document.getElementById('info') as HTMLElement;
    const infoNavbox = document.querySelectorAll('.nav-box')[2] as HTMLElement;
    window.addEventListener('scroll', () => {
      const coord = infoSection.getBoundingClientRect();
      if (coord.top < 115 && coord.top > -990) {
        this.resetNavbar();
        infoNavbox.classList.add('active');
      }
    })
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
    return "../../assets/speakers/" + name + ".jpeg";
  }
}
