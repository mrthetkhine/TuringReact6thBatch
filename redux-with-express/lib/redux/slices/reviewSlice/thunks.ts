import {createAppAsyncThunk} from "@/lib/redux/createAppAsyncThunk";
import {fetchAllMovie} from "@/lib/redux/slices/movieSlice/movieApi";
import {movieSlice, reviewSlice} from "@/lib/redux";
import {fetchAllReviewByMovieId} from "@/lib/redux/slices/reviewSlice/reviewApi";

export const getAllReviewByMovieAsync = createAppAsyncThunk(
    'review/getAllReviewByMovieAsync',
    async (movieId:string,thunkApi) => {
        const reviews = await fetchAllReviewByMovieId(movieId);
        thunkApi.dispatch(reviewSlice.actions.loadAllReviewByMovie(reviews.data));
        return reviews.data;
    });