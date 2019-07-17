import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.css']
})
export class MaestroComponent implements OnInit {
  visibility: number;

  constructor() { 
    this.visibility = 1;
  }

  ngOnInit() {
  }

  visibilityPanel(data: number){
    this.visibility = data;
  }

}
