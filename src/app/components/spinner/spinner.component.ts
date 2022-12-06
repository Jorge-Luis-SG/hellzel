import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { spinnerSvc } from 'src/app/services/spinnerSvc.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as $ from 'jquery';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  // isLoading = this.spinnerServices.isLoading$;

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
    window.onload = () => {
      $('.spinner').remove();
      document.body.style.overflow = 'auto';
    };
  }
}
