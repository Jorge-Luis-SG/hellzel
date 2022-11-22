import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss'],
})
export class FinalComponent implements OnInit {
  constructor() {
    $(window).scroll(function () {
      let scrollTop = $(this).scrollTop();
      let width1 = scrollTop / 15;
      $('.letter').css({
        width: function () {
          let elementHeight = $(this).height(),
            width = width1;
          return width;
        },
      });
    });
  }

  ngOnInit(): void {
    const letter = document.getElementById('letter');
    const letterLoad = (entradas, observador) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          console.log('En pntalla ');
          $('.letter').addClass('active');
          $('.paper').addClass('active');
        } else {
          console.log('Sin pntalla ');
          $('.letter').removeClass('active');
          $('.paper').removeClass('active');
        }
      });
    };
    const letterOberserver = new IntersectionObserver(letterLoad, {
      root: null,
      rootMargin: '0px',
      threshold: 0.9,
    });
    letterOberserver.observe(letter);
  }
}
