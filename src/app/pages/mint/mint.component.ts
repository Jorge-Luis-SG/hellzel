import { Component, OnInit } from '@angular/core';
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
  constructor() {}

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
