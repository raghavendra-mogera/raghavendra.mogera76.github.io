/*
 * File: program.component.ts
 * Project: spacex
 * -----
 * Copyright © 2020
 * Written By Raghavendra.
 */


import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as ProgramActions from '../programs.action';
import ProgramState from '../programs.state';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})
export class ProgramComponent implements OnInit {

  program$: Observable<ProgramState>;
  programSubscription: Subscription;
  programs: any[] = [];
  programError: Error = null;
  query = [];

  constructor(private store: Store<{ programs: ProgramState }>) {
    //retrieve data from store
    this.program$ = store.pipe(select('programs'));
  }

  ngOnInit(): void {
    //subscribe the latest state
    this.programSubscription = this.program$
      .pipe(
        map((x) => {
          this.programs = x.Programs;
          this.programError = x.ProgramError;
          console.log(x);
        })
      )
      .subscribe();
    // Dispatch for updated program from server
    this.store.dispatch(ProgramActions.BeginGetProgramAction({ query: {type: 'All', value:''} }));
  }
}
