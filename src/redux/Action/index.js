import * as types from './../Contants/ActionTypes';

// Action
export const actionToggleList = ()=>({type: types.ToggleList});

export const actionNavigation = ()=>({type: types.Navigation});

export const actionSchedule = (param)=>({
    type: types.Schedule,
    param
});


