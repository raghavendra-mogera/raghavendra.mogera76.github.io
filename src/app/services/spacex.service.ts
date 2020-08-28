/*
 * File: spacex.service.ts
 * Project: spacex
 * -----
 * Copyright © 2020
 * Written By Raghavendra.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root',
})
export class SpacexService {
  baseUrl = environment.apiBaseurl;

  filters = [
    {
      key: 'Launch Year',
      type: 'Year',
      value: null,
    },
    {
      key: 'Successful Launch',
      type: 'Launch',
      value: [true, false],
    },
    {
      key: 'Successful Land',
      type: 'Land',
      value: [true, false],
    },
  ];

  constructor(public httpclient: HttpClient) {}

  getFilters = () => {
    const arr = [];
    let start = 2006;
    const end = new Date().getFullYear();
    while (start <= end) {
      arr.push(start);
      start++;
    }
    this.filters[0].value = [...arr];
    return this.filters;
  }

  getPrograms = (query) => {
    switch (query.type) {
      case 'Launch':
        return this.getLaunchedPrograms(query.value);
        break;
      case 'Land':
        return this.getLandedPrograms(query.value);
        break;
      case 'Year':
        return this.getProgramsByYear(query.value);
        break;

      default:
        return this.getAllPrograms();
        break;
    }
  }

  getAllPrograms(): Observable<any[]> {
    const opts = { params: new HttpParams({ fromString: 'limit=100' }) };
    return this.httpclient.get<any[]>(this.baseUrl, opts);
  }

  getLaunchedPrograms(isLaunched): Observable<any[]> {
    const opts = {
      params: new HttpParams({
        fromString: `limit=100&launch_success=${isLaunched}`,
      }),
    };
    return this.httpclient.get<any[]>(this.baseUrl, opts);
  }

  getLandedPrograms(isLanded): Observable<any[]> {
    const opts = {
      params: new HttpParams({
        fromString: `limit=100&land_success=${isLanded}`,
      }),
    };
    return this.httpclient.get<any[]>(this.baseUrl, opts);
  }

  getProgramsByYear(year): Observable<any[]> {
    const opts = {
      params: new HttpParams({
        fromString: `limit=100&launch_year=${year}`,
      }),
    };
    return this.httpclient.get<any[]>(this.baseUrl, opts);
  }
}
