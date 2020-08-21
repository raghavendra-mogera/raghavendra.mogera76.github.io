import { Action, createReducer, on} from '@ngrx/store';
import * as ProgramActions from './programs.action';
import ProgramState, { initializeState } from './programs.state';

const initialState = initializeState();

const reducer = createReducer(
    initialState,
    on(ProgramActions.GetProgramAction, state => state),
  
    on(ProgramActions.SuccessGetProgramAction, (state: ProgramState, { payload }) => {
      return { ...state, Programs: payload, ProgramError: null };
    }),
    on(ProgramActions.ErrorProgramAction, (state: ProgramState, error: Error) => {
      // remove below line and use different telemetry logging
      console.error(error);
      return { ...state, ProgramError: error };
    })
  );

  export function ProgramReducer(
    state: ProgramState | undefined,
    action: Action
  ): ProgramState {
    return reducer(state, action);
  }