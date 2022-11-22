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
  hellzelHead: IParallaxScrollConfig = {
    parallaxSpeed: 0.2,
    parallaxSmoothness: 0.3,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'linear',
    parallaxThrottleTime: 0.3,
  };
  hellzel: IParallaxScrollConfig = {
    parallaxSpeed: 0.25,
    parallaxSmoothness: 0.3,
    parallaxDirection: 'straight',
    parallaxTimingFunction: 'linear',
    parallaxThrottleTime: 0,
  };
  pennyHead: IParallaxScrollConfig = {
    parallaxSpeed: 0.1,
    parallaxSmoothness: 0,
    parallaxDirection: 'straight',
    parallaxTimingFunction: 'linear',
    parallaxThrottleTime: 0,
  };
  penny: IParallaxScrollConfig = {
    parallaxSpeed: 0.35,
    parallaxSmoothness: 0,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'linear',
    parallaxThrottleTime: 0,
  };
  brain: IParallaxScrollConfig = {
    parallaxSpeed: 0.2,
    parallaxSmoothness: 0,
    parallaxDirection: 'straight',
    parallaxTimingFunction: 'linear',
    parallaxThrottleTime: 0,
  };

  constructor() {
    $(window).scroll(function () {
      var scrollTop = $(this).scrollTop();
      $('.hellzel-active').css({
        opacity: function () {
          var elementHeight = $(this).height(),
            opacity = (1 - scrollTop) / elementHeight + 6;
          return opacity;
        },
      });
      $('.penny-active').css({
        opacity: function () {
          var elementHeight = $(this).height(),
            opacity = (1 - scrollTop) / elementHeight + 6;
          return opacity;
        },
      });
    });
  }
  ngOnInit(): void {
    const paper1 = document.getElementById('paper1');
    const paper2 = document.getElementById('paper2');
    const paper3 = document.getElementById('paper3');

    const loadEffectFace = (entradas, observador) => {



      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          $('.hellzel').addClass('hellzel-active');
          $('.brain-container-item').css({
            left: 'calc(35% - 130px)',
            width: '260px'
          });
        } else {
          $('.hellzel').removeClass('hellzel-active');

        }
      });
    };
    //FACE
    const observador = new IntersectionObserver(loadEffectFace, {
      root: null,
      threshold: 0.0,
    });

    observador.observe(paper1);

    //BRAIN
    const loadEffectBrain = (entradas, observador) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          $('.diagnosis-one').addClass('active');
          $('.diagnosis-two').addClass('active');
          $(window).scroll(function () {
            let scrollTop = $(this).scrollTop();
            let part1 = (10*100)/10;
            let width1 = (scrollTop / 4) - part1;
            let width2 = width1/2;
            let width3 = width2.toString();
            $('.brain-container-item').css({
              left: 'calc(50% - '+ width2+"px)",
              width: function () {
                let elementHeight = $(this).height(),
                  width = width1 ;
                return width;
              },
            });
          });
        } else {
          $('.brain-container').removeClass('brain-active');
          $('.diagnosis-one').removeClass('active');
          $('.diagnosis-two').removeClass('active');


          $(window).scroll(function () {
            let scrollTop = $(this).scrollTop();
            let width1 = (scrollTop / 4);
            let width3 = 260;
            let width2 = width3/2;
            $('.brain-container-item').css({
              left: 'calc(35% - '+ width2+"px)",
              width: function () {
                let elementHeight = $(this).height(),
                  width = width3;
                return width;
              },
            });
          });
        }
      });
    };
    const brainOberserver = new IntersectionObserver(loadEffectBrain, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });
    brainOberserver.observe(paper2);

    const brainOberserver2 = (entradas, observador) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          $('.brain-container-item').css({
            left: 'calc(35% - 130px)',
            width: '260px'
          });
        } else {
          $('.face').removeClass('face-active');

        }
      });
    };
    //FACE
    const brainOberserver2Action = new IntersectionObserver(brainOberserver2, {
      root: null,
      threshold: 0.5,
    });
    brainOberserver2Action.observe(paper3);
  }

}
