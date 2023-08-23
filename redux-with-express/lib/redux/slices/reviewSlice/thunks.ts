import {createAppAsyncThunk} from "@/lib/redux/createAppAsyncThunk";
import {fetchAllMovie} from "@/lib/redux/slices/movieSlice/movieApi";
import {movieSlice, reviewSlice} from "@/lib/redux";
import {
    deleteReview,
    fetchAllReviewByMovieId,
    saveReview,
    updateReview
} from "@/lib/redux/slices/reviewSlice/reviewApi";

export const getAllReviewByMovieAsync = createAppAsyncThunk(
    'review/getAllReviewByMovieAsync',
    async (movieId:string,thunkApi) => {
        const reviews = await fetchAllReviewByMovieId(movieId);
        thunkApi.dispatch(reviewSlice.actions.loadAllReviewByMovie(reviews.data));
        return reviews.data;
    });
export const saveReviewAsync = createAppAsyncThunk(
    'review/saveReviewAsync',
    async (review:any,thunkApi) => {
        const reviewResponse = await saveReview(review);
        console.log('Review reponse ',reviewResponse);
        if(reviewResponse.status ==201)
        {
            thunkApi.dispatch(reviewSlice.actions.addReview(reviewResponse.data));
        }

        return reviewResponse.data;
    });
export const updateReviewAsync = createAppAsyncThunk(
    'review/updateReviewAsync',
    async (review:any,thunkApi) => {
        const reviewResponse = await updateReview(review);
        console.log('Review reponse ',reviewResponse);
        if(reviewResponse.status ==200)
        {
            thunkApi.dispatch(reviewSlice.actions.updateReview(reviewResponse.data));
        }

        return reviewResponse.data;
});
export const deleteReviewAsync = createAppAsyncThunk(
    'review/deleteReviewAsync',
    async (review:any,thunkApi) => {
        const reviewResponse = await deleteReview(review);
        console.log('Review reponse ',reviewResponse);
        if(reviewResponse.status ==200)
        {
            thunkApi.dispatch(reviewSlice.actions.deleteReview(reviewResponse.data));
        }

        return reviewResponse.data;
});