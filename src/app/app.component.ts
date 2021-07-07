import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showMobile: boolean = false;

  ngOnInit(): void {
    if (window.innerWidth <= 640) {
      this.showMobile = true;
    }
    
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 640) {
        this.showMobile = true;
      } else {
        this.showMobile = false;
      }
    })
  }
}
