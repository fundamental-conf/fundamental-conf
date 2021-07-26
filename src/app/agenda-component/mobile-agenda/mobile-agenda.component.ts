import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-agenda',
  templateUrl: './mobile-agenda.component.html',
  styleUrls: ['./mobile-agenda.component.scss']
})
export class MobileAgendaComponent implements OnInit {

  sideMenu: boolean = false;
  halfSize: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.adjustMenu();
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

  handleSideMenuToggle(value: boolean): void {
    this.sideMenu = value;
  }
}
