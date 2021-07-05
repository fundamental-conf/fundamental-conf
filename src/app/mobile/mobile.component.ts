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

  constructor() {
    smoothScroll.polyfill();
  }

  ngOnInit(): void {
    this.adjustMenu();
  }

  toggleMenu(): void {
    const container = document.querySelector('.container') as HTMLElement;
    this.sideMenu = !this.sideMenu;
    if (this.sideMenu) {
      container.style.height = "100%";
      container.style.overflowY = "hidden";
    } else {
      container.style.height = "300vh";
      container.style.overflowY = "scroll";
    }
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
}
