import Review from "@/lib/redux/slices/reviewSlice/Review";
import {getAllMovieAsync, MovieSliceState} from "@/lib/redux";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Movie from "@/lib/redux/slices/movieSlice/Movie";

export interface ReviewSliceState {
    reviews:Review[],
}

const initialState : ReviewSliceState = {
    reviews:[
    ]
};
export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        loadAllReviewByMovie: (state,action:PayloadAction<Review[]>) => {
            state.reviews = action.payload;
        },
    }
});