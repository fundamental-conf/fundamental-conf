import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss']
})
export class MobileNavbarComponent implements OnInit {

  sideMenu: boolean = false;
  halfSize: boolean = false;
  @Output() sideMenuToggled = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.initializeMenuBar();
  }

  initializeMenuBar(): void {
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

  toggleSideMenu(): void {
    this.sideMenu = !this.sideMenu;
    this.sideMenuToggled.emit(this.sideMenu);
  }
}
