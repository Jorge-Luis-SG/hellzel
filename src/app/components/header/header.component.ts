import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {

    let welcome = () => {
      $('.header-welcome').remove();
    };
    $(document).ready(function () {
      $('.header-menu-movil li a').click(()=>{
        $('#header-menu').removeClass('active-menu');
      })
      // ABRIR MENU
      $('.header-menu-img-container').click(()=>{
        $('#header-menu').addClass('active-menu');
      })
      // CERRAR MENU
      $('.close').click(()=>{
        $('#header-menu').removeClass('active-menu');
      })
      // ABRIR HOME
      $('.story').click(() => {
        $('.header-welcome').addClass('active');
        setInterval(welcome, 1000);
      });
    });
    $(window).scroll(function () {
      let scrollTop = $(this).scrollTop();
      if (scrollTop > 30) {
        $('.header-welcome').addClass('active');
        setInterval(welcome, 1000);
      }
    });
  }

  ngOnInit(): void {}
}
