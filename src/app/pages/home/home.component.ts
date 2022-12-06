import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import Swiper from 'swiper';
import SwiperCore, {
  Keyboard,
  Pagination,
  Navigation,
  Virtual,
  Autoplay,
} from 'swiper';
SwiperCore.use([Keyboard, Pagination, Navigation, Virtual, Autoplay]);



SwiperCore.use([Virtual]);

import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private anim: any;
  option: AnimationOptions = {
    path: '../../../assets/img/etc/animation/fire2.json',
  };

  injector: AnimationOptions = {
    path: '../../../assets/img/picture/injector.json',
    autoplay: false,
    loop: false,
  };

  animationCreated(animationItem: AnimationItem): void {
    // console.log(animationItem);
  }
  roapActive = false;

  constructor() {
    window.onscroll = function (e) {
      // console.log(window.scrollY); // Value of scroll Y in px
    };


    $(document).ready(function () {

    });
  }
  handleAnimation(anim: any) {
    this.anim = anim;
  }
  stop() {

  }
  play() {}

  roap1() {
    $('#roap2').removeClass('active');
    $('#roap1').addClass('active');
    this.roapActive = false;
    this.anim.setDirection(-1);
    this.anim.play();


  }
  roap2() {
    $('#roap2').addClass('active');
    $('#roap1').removeClass('active');
    this.roapActive = true;
    this.anim.setDirection(1);
    this.anim.play();
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    var nft = new Swiper('.nft', {
      slidesPerView: 1,
      loop: true,

      navigation: {
        nextEl: '.nft-next',
        prevEl: '.nft-prev',
      },
      pagination: {
        clickable: true,
      },
      // autoplay: {
      //   delay: 2000,
      // },
    });
  }
}
