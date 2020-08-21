import { createAction, props } from '@ngrx/store';

//action to get programs from local store
export const GetProgramAction = createAction('[Program] - Get Program');

//action to get programs from server
export const BeginGetProgramAction = createAction('[Program] - Begin Get Program',
props<{ query: any }>());

export const SuccessGetProgramAction = createAction(
  '[Program] - Success Get Program',
  props<{ payload: any[] }>()
);

export const ErrorProgramAction = createAction('[Programs] - Error', props<Error>());