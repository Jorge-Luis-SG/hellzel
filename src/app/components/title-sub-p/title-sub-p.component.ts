import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-sub-p',
  templateUrl: './title-sub-p.component.html',
  styleUrls: ['./title-sub-p.component.scss']
})
export class TitleSubPComponent implements OnInit {

  @Input() title: string;
  @Input() sub: string;
  @Input() info1: string;
  @Input() info2: string;

  constructor() { }

  ngOnInit(): void {
  }

}
