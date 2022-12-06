import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CommonService } from 'src/app/common.service';
import { PaisesSelectComponent } from '../paises-select/paises-select.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  location: any;
  url;
  pais;

  data(url, pais) {
    this.url = url;
    this.pais = pais;
    $('.screen-paises').removeClass('active');
  }
  constructor(private commomSvc: CommonService) {
    $(document).ready(function (e) {
      $('#pais').click(function () {
        $('.screen-paises').addClass('active');
      });
      $('.screen-paises').click(function () {
        $('.screen-paises').removeClass('active');
      });
      $('.paper-pais').click(function (e) {
        e.stopPropagation();
      });
    });
  }

  ngOnInit() {
    this.commomSvc.getLocation().subscribe((response) => {
      console.log(response);
      this.location = response;

      if (this.location.country_code == 'AR') {
        this.url = "https://www.asistenciaalsuicida.org.ar/ayuda";
        this.pais = "Argentina";
      }
      else if (this.location.country_code == 'AU') {
        this.url = "https://www.lifeline.org.au/";
        this.pais = "Australia";
      }
      else if (this.location.country_code == 'AT') {
        this.url = "http://www.telefonseelsorge.at/";
        this.pais = "Austria";
      }
      else if (this.location.country_code == 'BE') {
        this.url = "https://www.zelfmoord1813.be/";
        this.pais = "Bélgica";
      }
      else if (this.location.country_code == 'CA') {
        this.url = "https://www.crisisservicescanada.ca/en/";
        this.pais = "Canadá";
      }
      else if (this.location.country_code == 'CL') {
        this.url = "https://telefonodelaesperanza.org/necesito-ayuda";
        this.pais = "Chile";
      }
      else if (this.location.country_code == 'CO') {
        this.url = "https://www.minsalud.gov.co/salud/publica/SMental/Paginas/directorio-suicidio.aspx";
        this.pais = "Colombia";
      }
      else if (this.location.country_code == 'DK') {
        this.url = "https://www.regionh.dk/english/Healthcare-Services/Emergency-Medical-Services/Archive/Pages/Suicidal.aspx";
        this.pais = "Dinamarca";
      }
      else if (this.location.country_code == 'FR') {
        this.url = "https://suicideecoute.pads.fr/accueil";
        this.pais = "Francia";
      }
      else if (this.location.country_code == 'DE') {
        this.url = "https://www.telefonseelsorge.de/";
        this.pais = "Alemania";
      }
      else if (this.location.country_code == 'HK') {
        this.url = "https://samaritans.org.hk/";
        this.pais = "Hong Kong";
      }
      else if (this.location.country_code == 'IE') {
        this.url = "https://www.mentalhealthireland.ie/need-help-now/";
        this.pais = "Irlanda";
      }
      else if (this.location.country_code == 'MX') {
        this.url = "https://consejociudadanomx.org/index.php/es/";
        this.pais = "México";
      }
      else if (this.location.country_code == 'NZ') {
        this.url = "https://www.lifeline.org.nz/";
        this.pais = "Nueva Zelanda";
      }
      else if (this.location.country_code == 'SG') {
        this.url = "https://www.sos.org.sg/";
        this.pais = "Singapur";
      }
      else if (this.location.country_code == 'ZA') {
        this.url = "https://www.sadag.org/";
        this.pais = "Sudáfrica";
      }
      else if (this.location.country_code == 'ES') {
        this.url = "https://telefonodelaesperanza.org/";
        this.pais = "España";
      }
      else if (this.location.country_code == 'SE') {
        this.url = "https://mind.se/hitta-hjalp/sjalvmordslinjen/";
        this.pais = "Suecia";
      }
      else if (this.location.country_code == 'CH') {
        this.url = "https://www.143.ch/";
        this.pais = "Suiza";
      }
      else if (this.location.country_code == 'GB') {
        this.url = "https://www.thecalmzone.net/";
        this.pais = "Reino Unido";
      }
      else if (this.location.country_code == 'NG') {
        this.url = "https://blog.opencounseling.com/hotlines-ng/";
        this.pais = "Nigeria";
      }
      else {
        this.url = "https://suicidepreventionlifeline.org/";
        this.pais = "Estados Unidos";
      }

    });
  }
}
