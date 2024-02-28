import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Title } from '@angular/platform-browser';

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
  option: AnimationOptions = {
    path: '../../../assets/img/etc/animation/fire2.json',
  };

  injector: AnimationOptions = {
    path: '../../../assets/img/picture/injector.json',
    autoplay: false,
    loop: false,
  };

  private anim: any;
  roapActive: boolean = false;
  constructor(private title: Title) {
    let localstorage = localStorage.getItem('value');

    if (localstorage == 'en') {
      title.setTitle(
        "Hellzel's Mind | Inside the Mind of Hellzel | NFT Collection | Mental Illness"
      );
    } else if (localstorage == 'es') {
      title.setTitle(
        "Hellzel's Mind | Dentro de la Mente de Hellzel | Colección NFT | Enfermedades Mentales"
      );
    }
  }
  handleAnimation(anim: any) {
    this.anim = anim;
  }
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

  ngOnInit(): void { }
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
    });
  }
}
