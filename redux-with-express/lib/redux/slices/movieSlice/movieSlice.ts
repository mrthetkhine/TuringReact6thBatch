import Movie from "@/lib/redux/slices/movieSlice/Movie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {incrementAsync} from "@/lib/redux";
import {getAllMovieAsync} from "@/lib/redux/slices/movieSlice/thunks";

export interface MovieSliceState {
    movies:Movie[],
}

const initialState : MovieSliceState = {
    movies:[]
};


export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        loadAllMovie: (state,action:PayloadAction<Movie[]>) => {
            state.movies = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllMovieAsync.fulfilled, (state,action) => {
                //state.movies = action.payload;
            })

    },
});