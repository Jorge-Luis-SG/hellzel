import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.scss']
})
export class UpComponent implements OnInit {

  constructor() {
    $(document).ready(function(){

      $('.up').click(function(){
        $('body, html').animate({
          scrollTop: '0px'
        }, 700);
      });

      $(window).scroll(function(){
        if( $(this).scrollTop() > 500 ){
          $('.up').slideDown(800);
        } else {
          $('.up').slideUp(300);
        }
      });

    });
}


  ngOnInit(): void {
  }

}
