import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styleUrls: ['./spacex.component.scss']
})
export class SpacexComponent implements OnInit {

  title = "SpaceEX Launch programs";
  constructor() {
  }

  ngOnInit(): void {
  }

}
