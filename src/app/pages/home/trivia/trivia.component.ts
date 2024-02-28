import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss'],
})
export class TriviaComponent implements OnInit {


  id: number;
  nft;
  name;
  listQuestions: number[] = [];
  listSelected: any[] = [];
  showResult: boolean = false;
  constructor() {
    // EFECTO DE QUE AL BAJAR LA CARTA ANTES DE ABRIR LA TRIVIA SE PONGA MAS GRANDE
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
  openTrivia() {
    $('.letter').addClass('active');
    $('.paper').addClass('active');
    this.generate()
  };
  generate() {
    if (this.listQuestions.length < 12) {
      do {
        this.id = Math.floor(Math.random() * 12) + 1;
      } while (this.listQuestions.includes(this.id)) {
        this.listQuestions.push(this.id);
        $('.next').removeClass('activeTrue');
        $('.paper-box1 li').removeClass('active');
      }
    }
    if (this.listQuestions.length == 12) {
      this.result();
      this.showResult = true;
    }
  }
  ngOnInit(): void {
    $(document).ready(function () {
      $('.paper-box1 li').each((_, item) => {
        $(item).click((e): any => {
          $('.paper-box1 li').removeClass('active');
          $('.next').addClass('activeTrue');
          $(item).addClass('active');
        });
      });
    });
  }

  result(): any {
    const valueNft = Math.floor(Math.random() * this.listSelected.length);
    const id = this.listSelected[valueNft]
    if (this.listSelected.includes(12)) return this.id = 12
    if (this.listSelected.includes(11)) return this.id = 11
    this.id = id
  }
  select(id: number) {
    this.listSelected.push(id)
  }
}
