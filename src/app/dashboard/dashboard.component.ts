import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Sidebar toggle behavior
    $(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
      });
    });
    $(".nav .nav-link").on("click", function(){
      $(".nav").find(".active").removeClass("active");
      $(this).addClass("active");
   });
    // $('.nav .nav-link').click(function () {
    //   $('.nav .nav-link').removeClass('active');
    //   $(this).addClass('active');
    // });
  }
}
