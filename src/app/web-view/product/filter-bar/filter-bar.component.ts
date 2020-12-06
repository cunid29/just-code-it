import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var url = window.location.pathname;
    if (url != "/product") {
      $("#category-filter").addClass("d-none");
    } else {
      $("#category-filter").removeClass("d-none");
    };
  }
}
