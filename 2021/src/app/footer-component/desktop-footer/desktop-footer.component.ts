import { Component } from '@angular/core';

@Component({
  selector: 'app-desktop-footer',
  templateUrl: './desktop-footer.component.html',
  styleUrls: ['./desktop-footer.component.scss']
})
export class DesktopFooterComponent {

  currentYear: number;

  constructor() { 
    this.currentYear = new Date().getFullYear();
  }

}
