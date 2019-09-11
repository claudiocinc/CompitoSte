import { Component, OnInit } from '@angular/core';
import {Panel} from 'primeng/panel'; 

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  selectedTypes: string[] = ['M', 'F'];
  constructor() { }

  ngOnInit() {
  }

}
