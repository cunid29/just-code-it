import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import * as $ from 'jquery';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    // Sidebar toggle behavior
    $(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
      });
    });
    $(".nav .nav-link").on("click", function () {
      $(".nav").find(".active").removeClass("active");
      $(this).addClass("active");
    });
    //Account
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }
  logout(): void {
    this.tokenStorageService.signOut();
  }
}