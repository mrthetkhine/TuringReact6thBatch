import {CounterSliceState, incrementAsync} from "@/lib/redux";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AuthShape
{
    token?:string
}
const initialState: AuthShape = {
   token:undefined
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.token  = undefined;
        },

    },

})