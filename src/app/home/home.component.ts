import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ResponsiveService } from '../responsive.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  showMobile: boolean = false;
  private onDestroy$ = new Subject<void>();

  constructor(private responsiveService: ResponsiveService) { }

  ngOnInit(): void {
    this.responsiveService.showMobile$.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(val => this.showMobile = val);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
