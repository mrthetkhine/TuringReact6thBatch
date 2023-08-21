import {API_URL} from "@/app/setting/API";
import axios from "@/app/setting/our_axios";
import Movie from "@/lib/redux/slices/movieSlice/Movie";

const API = API_URL+"/movies";

export const fetchAllMovie = async ()=>{
    const result = await axios.get(API);
    console.log('Result ',result);
    const movies = await  result;
    return movies;
}
export const saveMovie = async (movie:Movie)=>{
    const result = await axios.post(API,movie);
    console.log('Save result ',result);
    const movies = await  result;
    return movies;
}
export const updateMovie = async (movie:Movie)=>{
    const result = await axios.put(API+`/${movie._id}`,movie);
    console.log('Update result ',result);
    const movies = await  result;
    return movies;
}
export const deleteMovie = async (movie:Movie)=>{
    const result = await axios.delete(API+`/${movie._id}`);
    console.log('Delete result ',result);
    const movies = await  result;
    return movies;
}