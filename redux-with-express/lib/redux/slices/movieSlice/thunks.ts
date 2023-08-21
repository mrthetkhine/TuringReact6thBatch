import {createAppAsyncThunk} from "@/lib/redux/createAppAsyncThunk";
import {deleteMovie, fetchAllMovie, saveMovie, updateMovie} from "@/lib/redux/slices/movieSlice/movieApi";
import {movieSlice} from "@/lib/redux";
import Movie from "@/lib/redux/slices/movieSlice/Movie";


export const getAllMovieAsync = createAppAsyncThunk(
    'movie/fetchAllMovie',
    async (arg,thunkApi) => {
        const movies = await fetchAllMovie();
        thunkApi.dispatch(movieSlice.actions.loadAllMovie(movies.data));
        return movies.data;
    }
)
export const saveMovieAsync = createAppAsyncThunk(
    'movie/saveMovieAsync',
    async (movie:Movie,thunkApi) => {
        const movies = await saveMovie(movie);
        thunkApi.dispatch(movieSlice.actions.addMovie(movies.data));
        return movies.data;
    }
)
export const updateMovieAsync = createAppAsyncThunk(
    'movie/updateMovieAsync',
    async (movie:Movie,thunkApi) => {
        const movies = await updateMovie(movie);
        thunkApi.dispatch(movieSlice.actions.updateMovie(movies.data));
        return movies.data;
    }
)
export const deleteMovieAsync = createAppAsyncThunk(
    'movie/deleteMovieAsync',
    async (movie:Movie,thunkApi) => {
        const movies = await deleteMovie(movie);
        thunkApi.dispatch(movieSlice.actions.deleteMovie(movies.data));
        return movies.data;
    }
)
