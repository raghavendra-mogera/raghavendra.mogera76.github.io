import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { SpacexService } from './services/spacex.service';
import * as ProgramActions from './programs.action';

@Injectable()
export class ProgramEffects {
  constructor(private action$: Actions, private spacexService: SpacexService) {}

  // created effect for fetching external data
  GetPrograms$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ProgramActions.BeginGetProgramAction),
      mergeMap((action) =>
        this.spacexService.getPrograms(action.query).pipe(
          map((result: any) => {
            return ProgramActions.SuccessGetProgramAction({ payload: result });
          }),
          catchError((error: Error) => {
            return of(ProgramActions.ErrorProgramAction(error));
          })
        )
      )
    )
  );
}
