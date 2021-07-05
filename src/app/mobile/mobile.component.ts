import { Component, OnInit } from '@angular/core';
import * as smoothScroll from 'smoothscroll-polyfill';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  sideMenu: boolean = false;
  halfSize: boolean = false;
  options = { threshold: 0.7 };

  constructor() {
    smoothScroll.polyfill();
  }

  ngOnInit(): void {
    this.adjustMenu();
    this.initializeNavbar();
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
  }

  navCheck(entries: any) {
    let navboxes = document.querySelectorAll('.nav-box');
    entries.forEach((entry:any) => {
        const className = entry.target.id;
        const activeBox = document.querySelector(`[data-page=${className}]`);
        if (entry.isIntersecting) {
          navboxes.forEach(navbox => {
            navbox.classList.remove('active');
          });
          activeBox?.classList.add('active');
        }
    });
  }

  scroll($element: any): void {
    const target = document.getElementById(`${$element.id}`) as HTMLElement;
    const yOffSet = this.halfSize ? -110 : -135;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffSet;
    window.scrollTo({top: y, behavior: 'smooth'});
  }
}
