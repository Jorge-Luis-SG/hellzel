import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { type } from 'jquery';
// import './base-preguntas'
@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss'],
})
export class FinalComponent implements OnInit {
  basePreguntas = [
    {
      1: {
        id: 1,
        pregunta: '¿Cuándo despiertas qué es lo primero que deseas hacer? ',
        gris1:
          'Asesinar a un par de personas por cómo te miraron el día anterior.',
        verde:
          'Seguir durmiendo, pues sientes un cansancio extremo, como si hubieses enterrado un cuerpo.',
        gris2:
          'Bajar a coger un cuchillo a la cocina… para prepararte el desayuno, el hambre te acecha.',
        nft: 'ansiedad',
        name: 'Ansiedad',
      },
      2: {
        id: 2,
        pregunta: 'Estás en en lugar repleto de personas, ¿tu reacción es?:',
        gris1:
          'Planear cómo descuartizar a cada uno de ellos mientras saludas sarcásticamente.',
        verde: 'Esconderte en el rincón más oscuro que encuentres.',
        gris2: 'Sacar una escopeta e ir disparando al que se te atraviese.',
        nft: 'depression',
        name: 'Depresión',
      },
      3: {
        id: 3,
        pregunta:
          'Te miras al espejo y lo primero que piensas de lo que observas es:',
        gris1:
          'Mucha maravilla de la existencia, eres todo un Dios: fuerte y poderoso.',
        verde:
          'No te sientes tú por más que lo intentes, no es tu cuerpo, no es tu realidad y lo deseas de una vez acabar.',
        gris2:
          'No puedes evitar la malvada mirada en tus ojos, que te pide a gritos que acabes con todo.',
        nft: 'trastorno-alimenticio',
        name: 'Trastorno alimenticio/anorexia',
      },
      4: {
        id: 4,
        pregunta:
          'Si recuerdas un acontecimiento del pasado que te causó daño tú:',
        gris1: 'Lo omites para seguir con tu vida diaria de mierda.',
        verde:
          'Te adentras tanto en él que la ansiedad, el miedo y la angustia se apoderan de ti y te generan una grave crisis.',
        gris2:
          'Planeas en las tinieblas cómo te vengarás vilmente de los que te hicieron sufrir.',
        nft: 'ptsd',
        name: 'Estrés postraumático',
      },
      5: {
        id: 5,
        pregunta:
          'Definamos si eres despitado o sólo idiota. Cuando hablas con alguien más tu mente automáticamente:',
        gris1:
          'Se concentra en lo que el otro diga, así no le interese ni una pizca.',
        verde:
          'Se va directo al país del nunca jamás a tratar de encontrar la pócima para volar. ',
        gris2:
          'Escuchas pedazos, pero la verdad es que quisieras estar estrangulándolo. ',
        nft: 'tda',
        name: 'Déficit de atención',
      },
      6: {
        id: 6,
        pregunta:
          'Estás disfrutando de una linda tarde observando tus compañeros de trabajo, pensando cómo acabar con cada uno ellos y de repente:',
        gris1: 'Te descubren queriendo asesinarlos.',
        verde:
          'Tu estado de ánimo cambia repentinamente y ya sólo quieres encerrarte a cortarte las venas.',
        gris2:
          'Experimentas una satisfacción inigualable al imaginar litros de sangre recorriendo la oficina. ',
        nft: 'bipolar',
        name: 'Depresión Bipolaridad',
      },
      7: {
        id: 7,
        pregunta: 'Si sufres lapsos de pérdida de conciencia tú: ',
        gris1: 'Recuerdas lo que pasó antes y después de la crisis.',
        verde:
          'Despiertas al siguiente día con gotas de sangre en tu ropa sin recordar ni un segundo de lo que pasó.',
        gris2:
          'Tratas de atar cabos para descifrar los huecos mentales con los que te quedaste. ',
        nft: 'tdi',
        name: 'Trastorno de identidad disociativo (Penny)',
      },
      8: {
        id: 8,
        pregunta:
          'En el colegio notaste un breve retraso en tu aprendizaje porque:',
        gris1:
          'Te distraías fácilmente jalando del cabello y mordiendo a tus compañeros.',
        verde:
          'Tenias problemas con el lenguaje y el desarrollo habitual cognitivo.',
        gris2: 'La verdad no ibas, estar sentado en la escuela te aburría.',
        nft: 'autismo',
        name: 'Autismo',
      },
      9: {
        id: 9,
        pregunta: '¿Has experimentado alguna vez..',
        gris1: 'Sensación de placer al infringir dolor en alguien más?.',
        verde:
          'Alucinaciones de seres, olores o situaciones que no son reales?',
        gris2:
          'Extrema angustia al salir a toparte con la sociedad y lo que se considera normal?',
        nft: 'esquizofrenia',
        name: 'Esquizofrenia',
      },
      10: {
        id: 10,
        pregunta: 'Si alguien se burla de ti, tú: ',
        gris1: 'Lo ignoras y piensas que es primero tu salud mental.',
        morado:
          'Planeas a escondidas cómo sacarle las tripas (y lo haces realidad)',
        gris2: 'Te vas a llorar a una esquina de tu cuarto.',
        nft: 'tdi',
        name: 'Trastorno de identidad disociativo (Penny)',
      },
      11: {
        id: 11,
        pregunta: 'Para resolver un conflicto tú optas por:',
        gris1: 'Dialogar con las partes y conciliar. ',
        morado:
          'Agarrar un machete y cortarle la cabeza al causante de tu malestar.',
        gris2: 'Lo tachas de tu vida y no le vuelves a hablar.',
        nft: 'tdi',
        name: 'Trastorno de identidad disociativo (Penny)',
      },
    },
  ];
  @Input() pregunta: any;
  @Input() r1: any;
  @Input() r2: any;
  @Input() r3: any;

  @Input() resultadoFinal = false;

  id: number;
  btn: string = 'Siguiente';
  nft;
  name;

  dataPreguntas = this.basePreguntas;

  trivia(e): any {
    let id = this.dataPreguntas[0][e].id;
    let pregunta = this.dataPreguntas[0][e].pregunta;
    let r1 = this.dataPreguntas[0][e].gris1;
    let r2: any;
    if (e < 10) {
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
    let respuesta = 0;
    let gris: boolean = false;
    let verde: boolean = false;
    $('#letter').click(()=>{
      $('.letter').addClass('active');
      $('.paper').addClass('active');
    })

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
          console.log(index);
          return (respuesta = index);
        });
      });
    });
    console.log(respuesta + ' res ');
    let j = 0;
    let i = 0;
    let next = 0;
    let lista = [];
    let repetido;
    for (let i = 0; i < 11; i++) {
        while (!lista[i]) {
            repetido = true;
            while (repetido == true) {
                let random = Math.random();
                random = random * 11 + 1;
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
    this.trivia(lista[next]);
    $('.next').click(() => {
      console.log(lista);
      if (next > 9) {
        $('.paper').addClass('activeres');
        // this.btn = 'Repetir';
        $('.next').remove();
      } else {
        next++;
        $('.next').removeClass('activeTrue');
        $('.paper-box1 li').removeClass('active');
      }
      console.log("lista numero "+lista[next])
      this.trivia(lista[next]);
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
      }
      else if (gris == true) {
        if (i == 0) {
          this.nft = "hellzel";
          this.name = "Hellzel";
          i++;
        }
      }
      console.log('el nft final es: ' + this.nft);
      console.log('pagina ' + next);
    });
    console.log(this.resultadoFinal);
  }
}
