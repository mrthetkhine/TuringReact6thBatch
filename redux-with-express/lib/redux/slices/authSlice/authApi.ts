import {API_URL} from "@/app/setting/API";
import axios from "@/app/setting/our_axios";
import Movie from "@/lib/redux/slices/movieSlice/Movie";

const API = API_URL+"/users";

export const login = async (user:any)=>{
    const result = await axios.post(API+'/login',user);
    console.log('Login result ',result);
    const userResponse = await  result;
    return userResponse;
}