import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-footer',
  templateUrl: './mobile-footer.component.html',
  styleUrls: ['./mobile-footer.component.scss']
})
export class MobileFooterComponent {

  currentYear: number;

  constructor() { 
    this.currentYear = new Date().getFullYear();
  }

}
