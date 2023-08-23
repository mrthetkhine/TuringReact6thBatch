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
        addReview: (state,action:PayloadAction<Review>) => {
            state.reviews.push(action.payload);
        },
        updateReview:(state,action:PayloadAction<Review>) => {
            state.reviews = state.reviews.map(review=> review._id == action.payload._id
                                                    ?action.payload:review);
        },
        deleteReview :(state,action:PayloadAction<Review>) => {
            state.reviews = state.reviews.filter(review => review._id != action.payload._id)
        },
    }
});