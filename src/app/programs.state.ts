export default class UserState {
  Programs: any[];
  ProgramError: Error;
}

export const initializeState = (): UserState => {
  return { Programs: [], ProgramError: null };
};
