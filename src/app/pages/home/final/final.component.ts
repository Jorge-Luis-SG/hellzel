import { Component, Input, OnInit } from '@angular/core';
import { TriviaEs } from './basepreguntasEs';
import { TriviaEn } from './basepreguntasEn';

import * as $ from 'jquery';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss'],
})
export class FinalComponent implements OnInit {

  pregunta: string;
  r1: string;
  r2: string;
  r3: string;
  id: number;
  nft;
  name;
  localstorage = localStorage.getItem('value');
  dataPreguntas;
  //Trivia español
  TriviaEs = new TriviaEs();
  //Trivia english
  TriviaEn= new TriviaEn()


  //FUNCION DE LA TRIVIA, ESTO ES LA PRINCIPAL
  trivia(e): any {
    let id = this.dataPreguntas[0][e].id;
    let pregunta = this.dataPreguntas[0][e].pregunta;
    let r1 = this.dataPreguntas[0][e].gris1;
    let r2: any;
    if (e < 11) {
      r2 = this.dataPreguntas[0][e].verde;
    } else {
      r2 = this.dataPreguntas[0][e].morado;
    }
    let r3 = this.dataPreguntas[0][e].gris2;
    this.pregunta = pregunta;
    this.r1 = r1;
    this.r2 = r2;
    this.r3 = r3;
    this.id = JSON.parse(id);
  }

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

  ngOnInit(): void {
    // OBTENER LA VARIABLE PARA DEFINIR EL IDIOMA DE LA TRIVIA
    if (this.localstorage == 'es') {
      this.dataPreguntas = this.TriviaEs.base;
    } else if (this.localstorage == 'en') {
      this.dataPreguntas = this.TriviaEn.base;
    }
    //FIN DE OBTENER LA VARIABLE PARA DEFINIR EL IDIOMA DE LA TRIVIA

    let respuesta = 0;
    let gris: boolean = false;
    let verde: boolean = false;
    $('#letter').click(() => {
      $('.letter').addClass('active');
      $('.paper').addClass('active');
    });

    $(document).ready(function () {
      $('.paper-box1 li').each((index, item) => {
        $(item).click((e): any => {
          $('.paper-box1 li').removeClass('active');
          $('.next').addClass('activeTrue');
          $(item).addClass('active');
          if (index == 1) {
            gris = false;
            verde = true;
          } else {
            gris = true;
          }
          return (respuesta = index);
        });
      });
    });

    //ESTO ES EL GENERADOR DE NUMEROS ALEATORIOS
    let j = 0;
    let i = 0;
    let next = 0;
    let lista = [];
    let repetido;
    //ESTO ES EL GENERADOR DE NUMEROS ALEATORIOS
    for (let i = 0; i < 12; i++) {
      while (!lista[i]) {
        repetido = true;
        while (repetido == true) {
          let random = Math.random();
          random = random * 12 + 1;
          random = Math.trunc(random);
          for (let j = 0; j < lista.length; j++) {
            if (lista[j] == random) {
              repetido = true;
              break;
            } else {
              repetido = false;
            }
          }
          lista[i] = random;
        }
      }
    }
    // FIN DE GENERADOR DE NUMEROS ALEATORIOS

    this.trivia(lista[next]);
    $('.next').click(() => {
      //ESPAÑOL CAMBIAR EL IDIOMA A LAS PREGUNTAS AL HACER CLICK EN EL LANGUAGE CHANGE
      $('#es').click(() => {
        return (this.dataPreguntas = this.TriviaEs.base);
      });
      // INGLES CAMBIAR EL IDIOMA A LAS PREGUNTAS AL HACER CLICK EN EL LANGUAGE CHANGE
      $('#en').click(() => {
        return (this.dataPreguntas = this.TriviaEn.base);
      });

      //ACTIVA EL BOTON DE SIGUIENTE AL PRESIONAR UNA PREGUNTA
      if (next > 10) {
        $('.paper').addClass('activeres');
        $('.next').remove();
      } else {
        next++;
        $('.next').removeClass('activeTrue');
        $('.paper-box1 li').removeClass('active');
      }
      //SE ESTABLECE NUEVAMENTE LA FUNCION CON LA NUEVA LISTA DE PREGUNTAS ALEATORIA OTORGADA ARRIBA
      this.trivia(lista[next]);
      //EJECUTAMOS VERDE SIGNIFICA LAS PRIMERAS 10 PREGUNTAS, LUEGO A PARTIR DE LA 11 ENTRAN LAS PREGUNTAS MORADAS QUE TIENEN MAS VALOR QUE TODAS
      if (verde == true) {
        if (j == 0) {
          this.nft = this.dataPreguntas[0][lista[next]].nft;
          this.name = this.dataPreguntas[0][lista[next]].name;

          j++;
        } else if (this.dataPreguntas[0][lista[next]].id > 10) {
          if (respuesta == 1) {
            this.nft = this.dataPreguntas[0][lista[next]].nft;
            this.name = this.dataPreguntas[0][lista[next]].name;
          }
        }
      } else if (gris == true) {
        if (i == 0) {
          this.nft = 'hellzel';
          this.name = 'Hellzel';
          i++;
        }
      }
    });
  }
}
