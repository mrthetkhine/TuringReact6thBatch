import {createAppAsyncThunk} from "@/lib/redux/createAppAsyncThunk";
import {fetchAllMovie} from "@/lib/redux/slices/movieSlice/movieApi";
import {movieSlice} from "@/lib/redux";


export const getAllMovieAsync = createAppAsyncThunk(
    'movie/fetchAllMovie',
    async (arg,thunkApi) => {
        const movies = await fetchAllMovie();
        thunkApi.dispatch(movieSlice.actions.loadAllMovie(movies.data));
        return movies.data;
    }
)
