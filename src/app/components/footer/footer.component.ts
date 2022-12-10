import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CommonService } from 'src/app/common.service';
import { PaisesSelectComponent } from '../paises-select/paises-select.component';
import { Paises } from './paises';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  location

  url;
  pais;

  paises = new Paises();
  getPais = this.paises.dataPais;

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
      this.location = response;
      switch (this.location.country_code) {
        case 'AR':
          this.url = this.getPais[0].url;
          this.pais = this.getPais[0].pais;
          break;
        case 'AU':
          this.url = this.getPais[1].url;
          this.pais = this.getPais[1].pais;
          break;
        case 'AT':
          this.url = this.getPais[2].url;
          this.pais = this.getPais[2].pais;
          break;
        case 'BE':
          this.url = this.getPais[3].url;
          this.pais = this.getPais[3].pais;
          break;
        case 'CA':
          this.url = this.getPais[4].url;
          this.pais = this.getPais[4].pais;
          break;
        case 'CL':
          this.url = this.getPais[5].url;
          this.pais = this.getPais[5].pais;
          break;
        case 'CO':
          this.url = this.getPais[6].url;
          this.pais = this.getPais[6].pais;
          break;
        case 'DK':
          this.url = this.getPais[7].url;
          this.pais = this.getPais[7].pais;
          break;
        case 'FR':
          this.url = this.getPais[8].url;
          this.pais = this.getPais[8].pais;
          break;
        case 'DE':
          this.url = this.getPais[9].url;
          this.pais = this.getPais[9].pais;
          break;
        case 'HK':
          this.url = this.getPais[10].url;
          this.pais = this.getPais[10].pais;
          break;
        case 'IE':
          this.url = this.getPais[11].url;
          this.pais = this.getPais[11].pais;
          break;
        case 'MX':
          this.url = this.getPais[12].url;
          this.pais = this.getPais[12].pais;
          break;
        case 'NZ':
          this.url = this.getPais[13].url;
          this.pais = this.getPais[13].pais;
          break;
        case 'SG':
          this.url = this.getPais[14].url;
          this.pais = this.getPais[14].pais;
          break;
        case 'ZA':
          this.url = this.getPais[15].url;
          this.pais = this.getPais[15].pais;
          break;
        case 'ES':
          this.url = this.getPais[16].url;
          this.pais = this.getPais[16].pais;
          break;
        case 'SE':
          this.url = this.getPais[17].url;
          this.pais = this.getPais[17].pais;
          break;
        case 'CH':
          this.url = this.getPais[18].url;
          this.pais = this.getPais[18].pais;
          break;
        case 'GB':
          this.url = this.getPais[19].url;
          this.pais = this.getPais[19].pais;
          break;
        case 'NG':
          this.url = this.getPais[20].url;
          this.pais = this.getPais[20].pais;
          break;
        default:
          this.url = this.getPais[21].url;
          this.pais = this.getPais[21].pais;
          break;
      }
    });
  }
}
