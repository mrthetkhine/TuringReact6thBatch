import {API_URL} from "@/app/setting/API";
import axios from "@/app/setting/our_axios";
import Movie from "@/lib/redux/slices/movieSlice/Movie";

const API = API_URL+"/reviews";

export const fetchAllReviewByMovieId = async (movieId:string)=>{
    const result = await axios.get(API+`/movie/${movieId}`);
    console.log('Result ',result);
    const reviews = await  result;
    return reviews;
}

export const saveReview = async (review:any)=>{
    const result = await axios.post(API,review);
    console.log('Result ',result);
    const reviews = await  result;
    return reviews;
}
export const updateReview = async (review:any)=>{
    const result = await axios.put(API+`/${review._id}`,review);
    console.log('Result ',result);
    const reviews = await  result;
    return reviews;
}
export const deleteReview = async (review:any)=>{
    const result = await axios.delete(API+`/${review._id}`,review);
    console.log('Result ',result);
    const reviews = await  result;
    return reviews;
}