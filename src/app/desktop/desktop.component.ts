import { Component, OnInit } from '@angular/core';
import * as data from '../speakers.json';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  speakerData: any = (data as any).default;
  speakers: any[] = [];
  totalNumSpeaker: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.speakers = this.speakerData.speakers;
    this.totalNumSpeaker = this.speakers.length;
  }

}
