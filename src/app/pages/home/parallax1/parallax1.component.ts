import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';
import * as $ from 'jquery';

@Component({
  selector: 'app-parallax1',
  templateUrl: './parallax1.component.html',
  styleUrls: ['./parallax1.component.scss'],
})
export class Parallax1Component implements OnInit {
  constructor() {
    $(window).scroll(function () {
      var scrollTop = $(this).scrollTop();
      $('.brai').css({
        opacity: function () {
          var elementHeight = $(this).height(),
            opacity = (1 - scrollTop) / elementHeight + 6;
          return opacity;
        },
      });
      $('.penny-headsa').css({
        opacity: function () {
          var elementHeight = $(this).height(),
            opacity = (3 + scrollTop) / elementHeight - 9;
          return opacity;
        },
      });
    });
  }
  ngOnInit(): void {
    const paper1 = document.getElementById('paper1');
    const paper2 = document.getElementById('paper2');
    const paper3 = document.getElementById('paper3');
    const head1 = document.getElementById('head1');
    const head2 = document.getElementById('head2');

    const loadEffectFace = (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          $('.hellzel').addClass('hellzel-active');
          $('.brain-container-item').addClass('active');
          $('.forehead').addClass('forehead-active');
          $('a[href*="#paper3"]');

          $('.brain').removeClass('active');
          $('.diagnosis-one').removeClass('active');
          $('.diagnosis-two').removeClass('active');
          $('.parallax-box3-container').removeClass(
            'parallax-box3-container-active'
          );
          console.log("HOLA")
        } else {
          $('.hellzel').removeClass('hellzel-active');
          $('.forehead').removeClass('forehead-active');
        }
      });
    };
    //FACE
    const observador = new IntersectionObserver(loadEffectFace, {
      root: null,
      threshold: 0.8,
    });

    observador.observe(paper1);

    //BRAIN
    const loadEffectBrain = (entradas, observador) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          $('.diagnosis-one').addClass('active');
          $('.diagnosis-two').addClass('active');
          $('.brain').addClass('active');
          $('.parallax-box3-container').addClass(
            'parallax-box3-container-active'
          );
        } else {
        }
      });
    };
    const brainOberserver = new IntersectionObserver(loadEffectBrain, {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    });
    brainOberserver.observe(paper2);

    const brainOberserver2 = (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          $('.brain').removeClass('active');
          $('.diagnosis-one').removeClass('active');
          $('.diagnosis-two').removeClass('active');
          $('.parallax-box3-container').removeClass(
            'parallax-box3-container-active'
          );
          $('.parallax-box4-nft').addClass('active');
        } else {
          $('.parallax-box4-nft').removeClass('active');
        }
      });
    };
    //FACE
    const brainOberserver2Action = new IntersectionObserver(brainOberserver2, {
      root: null,
      threshold: 0.8,
    });
    brainOberserver2Action.observe(paper3);

    const loadEffecthead1 = (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          $('.hellzel').addClass('hellzel-active');
          $('.brain-container-item').addClass('active');
          $('.forehead').addClass('forehead-active');

          $('.brain').removeClass('active');
          $('.diagnosis-one').removeClass('active');
          $('.diagnosis-two').removeClass('active');
          $('.parallax-box3-container').removeClass(
            'parallax-box3-container-active'
          );
        } else {
          $('.hellzel').removeClass('hellzel-active');
          $('.brain-container-item').removeClass('active');
          $('.forehead').removeClass('forehead-active');
        }
      });
    };
    const headOberserver = new IntersectionObserver(loadEffecthead1, {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    });
    headOberserver.observe(head1);
    const loadEffecthead2 = (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
           console.log("PANTALLA 3")
          $('.parallax-box3-container').removeClass(
            'parallax-box3-container-active'
          );
          $('.parallax-box4-nft-movil').addClass('active');
        } else {
          $('.parallax-box4-nft-movil').removeClass('active');
        }
      });
    };
    const head2Oberserver = new IntersectionObserver(loadEffecthead2, {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    });
    head2Oberserver.observe(head2);
  }
}
