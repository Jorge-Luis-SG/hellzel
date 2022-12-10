import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import * as $ from 'jquery';
import { dataEn } from './baseEn';
import { dataEs } from './baseEs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  hands: AnimationOptions = {
    path: '../../../../assets/img/etc/animation/hands.json',
  };
// BASE DE DATOS DE PREGUNTAS
  dataEn = new dataEn();
  faqEn= this.dataEn.faq

  dataEs = new dataEs();
  faqEs= this.dataEs.faq
// BASE DE DATOS DE PREGUNTAS



  constructor() {
    $(document).ready(function (e) {
      $('.faq-btn').each(function (indice, elemento) {
        let index = indice.toString();
        var container = $('#faq' + index);
        if (!$(index).closest(container).length) {
          container.hide();
        }
        $(elemento).click(function () {
          $('.faq-screen').click(function () {
            $('#faq' + index).removeClass('active');
            $('.faq-screen').removeClass('active');
            container.hide();
          });
          $(container).click(function (e) {
            e.stopPropagation();
          });
          if ($(elemento).click) {
            $('#faq' + index).addClass('active');
            $('.faq-screen').addClass('active');
            console.log(index);
            $('#faq' + index).css({
              display: 'block',
            });
          }
        });
      });
    });
  }

  ngOnInit(): void {}
}
