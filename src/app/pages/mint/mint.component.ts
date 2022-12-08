import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import SwiperCore, {
  Pagination,
  Virtual,
  Autoplay,
  Swiper,
} from 'swiper';
SwiperCore.use([Pagination, Virtual, Autoplay]);




SwiperCore.use([Virtual]);


@Component({
  selector: 'app-mint',
  templateUrl: './mint.component.html',
  styleUrls: ['./mint.component.scss'],
})
export class MintComponent implements OnInit {
  constructor(private title: Title) {
    let localstorage = localStorage.getItem('value');

    if (localstorage == 'en') {
      title.setTitle(
        "Hellzel's Mind | MINT Now! | NFT Collection | Mental Illness"
      );
    } else if (localstorage == 'es') {
      title.setTitle(
        "Hellzel's Mind | ¡Haz MINT Ya! | Colección NFT | Enfermedades Mentales"
      );
    }
  }

  ngOnInit(): void {
    var nft = new Swiper('.nft-mint', {
      slidesPerView: 1,
      loop: true,
      pagination: {
        clickable: true,
      },
      autoplay: {
        delay: 1750,
      },
    });
  }
  ngAfterViewInit(): void {

  }
}
