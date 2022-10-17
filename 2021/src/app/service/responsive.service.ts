import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  private mobileThreshold: number = 1050;
  showMobile$: Observable<any>;
  
  constructor() { 
    this.showMobile$ = new Observable((subscriber) => {
      window.addEventListener('load', () => {
        subscriber.next(this.showMobile());
      });
      window.addEventListener('resize', () => {
        subscriber.next(this.showMobile());
      });
      window.addEventListener('orientationchange', () => {
        subscriber.next(this.showMobile());
      });
    }).pipe(
      debounceTime(500)
    );
  }

  showMobile(): boolean {
    if (window.innerWidth <= this.mobileThreshold) {
      return true;
    }
    return false;
  }
}
