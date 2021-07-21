import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mobileThreshold: number = 800;
  showMobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth <= this.mobileThreshold) {
      this.showMobile = true;
    }
    
    window.addEventListener('resize', () => {
      if (window.innerWidth <= this.mobileThreshold) {
        this.showMobile = true;
      } else {
        this.showMobile = false;
      }
    })
  }
}
