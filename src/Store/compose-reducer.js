import { createSlice } from "@reduxjs/toolkit";

const initialComposeState = {
    ComposeMail: '',
    fetchMail: {}
}

const ComposeSlice = createSlice({
    name: 'compose',
    initialState: initialComposeState,
    reducers: {
        ComposeMail(state, action){
            state.composeMail = action.payload.userMail
        },
        fetchMail(state, action){
            state.fetchMail = action.payload
        },
        ReadMail(state, action){
            state.fetchMail[action.payload].read = true
        },
        sentMail(state, action){
            state.fetchMail = action.payload
        }
    }
});

export const composeActions = ComposeSlice.actions;
export default ComposeSlice.reducer;