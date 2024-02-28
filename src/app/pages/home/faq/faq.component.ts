import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  hands: AnimationOptions = {
    path: '../../../../assets/img/etc/animation/hands.json',
  };

  faqShow: boolean = false;
  id: number;
  
  openFaq(id: number) {
    this.faqShow = true;
    this.id = id;
  }

  stopPropagation(event: Event) {
    event.stopPropagation()
  }

  closeFaq() {
    this.faqShow = false;
  }
}


