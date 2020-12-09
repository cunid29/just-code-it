import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var btn = $('.btn-backToTop');
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.removeClass('d-none');
      } else {
        btn.addClass('d-none');
      }
    });

    btn.on('click', function(e){
      e.preventDefault();
      $('html,body').animate({scrollTop:0},'300');
    });
  }

}
