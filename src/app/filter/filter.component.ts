/*
 * File: filter.component.ts
 * Project: spacex
 * -----
 * Copyright © 2020
 * Written By Raghavendra.
 */

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SpacexService } from '../services/spacex.service';
import * as ProgramActions from '../programs.action';
import ProgramState from '../programs.state';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  title = "Filters"; 
  filters = [];
  activeFilter= {
    type : '',
    value : ''
  };
  constructor(public spacex: SpacexService, private store: Store<{ programs: ProgramState }>) { }

  ngOnInit(): void {
    this.filters = this.spacex.getFilters();
  }

  //Filter fulction for applying different filters to get programs
  apply(type, value) {
    this.activeFilter = {
      type: type,
      value: value
    };
    this.store.dispatch(ProgramActions.BeginGetProgramAction({ query: {type:type, value:value} }));
  }

}
