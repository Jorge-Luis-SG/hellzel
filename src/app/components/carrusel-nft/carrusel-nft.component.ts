import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Autoplay, Swiper, SwiperOptions, Virtual } from 'swiper';
SwiperCore.use([Autoplay]);
@Component({
  selector: 'app-carrusel-nft',
  templateUrl: './carrusel-nft.component.html',
  styleUrls: ['./carrusel-nft.component.scss']
})
export class CarruselNftComponent {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext(){
    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiper.swiperRef.slidePrev(100);
  }
  config: SwiperOptions = {
    spaceBetween: 50,
    loop: true,
    autoplay:{
      delay:2500
    }
  };


  slidesEs=[
    {
      name:'Ansiedad',
      nftImg:'ansiedad',
    },
    {
      name:'Autismo',
      nftImg:'autismo',
    },
    {
      name:'Bipolar',
      nftImg:'bipolar',
    },
    {
      name:'Depresión',
      nftImg:'depression',
    },
    {
      name:'Esquizofrenia',
      nftImg:'esquizofrenia',
    },
    {
      name:'Hellzel',
      nftImg:'hellzel',
    },
    {
      name:'Panico',
      nftImg:'panico',
    },
    {
      name:'Ptsd',
      nftImg:'ptsd',
    },
    {
      name:'Tda',
      nftImg:'tda',
    },
    {
      name:'Tdi',
      nftImg:'tdi',
    },
    {
      name:'Trastorno alimenticio',
      nftImg:'trastorno-alimenticio',
    },
  ]

  slidesEn=[
    {
      name:'anxiety',
      nftImg:'ansiedad',
    },
    {
      name:'autism',
      nftImg:'autismo',
    },
    {
      name:'bipolar',
      nftImg:'bipolar',
    },
    {
      name:'Depression',
      nftImg:'depression',
    },
    {
      name:'schizophrenia',
      nftImg:'esquizofrenia',
    },
    {
      name:'Hellzel',
      nftImg:'hellzel',
    },
    {
      name:'panic',
      nftImg:'panico',
    },
    {
      name:'Ptsd',
      nftImg:'ptsd',
    },
    {
      name:'Tda',
      nftImg:'tda',
    },
    {
      name:'Tdi',
      nftImg:'tdi',
    },
    {
      name:'eating disorder',
      nftImg:'trastorno-alimenticio',
    },
  ]
}
