import {createAppAsyncThunk} from "@/lib/redux/createAppAsyncThunk";
import {fetchAllMovie} from "@/lib/redux/slices/movieSlice/movieApi";
import {authSlice, movieSlice} from "@/lib/redux";
import {login} from "@/lib/redux/slices/authSlice/authApi";

export const loginAsync = createAppAsyncThunk(
    'auth/login',
    async (user:any,thunkApi) => {
        let userResponse;
        try {

            userResponse = await login(user);
            if(userResponse.status == 200)
            {
                thunkApi.dispatch(authSlice.actions.login(userResponse.data));

            }
        }
        catch(e)
        {
            console.log('Error case ',e.response);
            return thunkApi.rejectWithValue(e.response.data);
        }

        return userResponse.data;
    }
    );