export default class userState{
    Programs:any[];
    ProgramError: Error
}

export const initializeState = (): userState => {
    return { Programs: <any>[], ProgramError:null}
}
