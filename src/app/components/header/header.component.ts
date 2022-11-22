import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeMenu(){
    document.getElementById("header-menu")?.classList.add("active-menu")

  }
  NoactiveMenu(){
    document.getElementById("header-menu")?.classList.remove("active-menu")
  }
  constructor() {

    let welcome=()=>{
      $('.header-welcome').remove();

    }
    $(document).ready(function () {
      $('.story').click(()=>{
        $('.header-welcome').addClass('active')
        setInterval(welcome,1000)
      })
    });
    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();
        if(scrollTop > 30){
          $('.header-welcome').addClass('active')
          setInterval(welcome,1000)
        }
      });
  }

  ngOnInit(): void {
  }

}
