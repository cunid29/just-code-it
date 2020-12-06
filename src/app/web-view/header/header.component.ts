import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).ready(function () {
      var url = window.location.pathname;
      if (url != "/") {
        $("#menu-main .nav-link").addClass("text-dark");
        $("#menu-main").addClass("mb-5"); 
      } else {
        $(".nav-link").addClass("text-white");
      }
    });
  }

  navbar_scroll = false;
  header_main = true;
  @HostListener("document:scroll")
  scrollfunction() {
    var url = window.location.pathname;
    var colorLink = $(".nav-link");
    if (url == "/") {
      if (document.body.scrollTop > 66 || document.documentElement.scrollTop > 66) {
        this.navbar_scroll = true;
        this.header_main = false;
        colorLink.removeClass("text-white");
        colorLink.addClass("text-dark");
      } else {
        this.navbar_scroll = false;
        this.header_main = true;
        colorLink.removeClass("text-dark");
        colorLink.addClass("text-white");
      }
    } else {
      if (document.body.scrollTop > 66 || document.documentElement.scrollTop > 66) {
        this.navbar_scroll = true;
        this.header_main = false;
      } else {
        this.navbar_scroll = false;
        this.header_main = false;
      }
    }
  }
}
