import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.scss']
})
export class PaperComponent implements OnInit {

  @Input() title:string ="";
  @Input() desc:string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
