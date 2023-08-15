import Director from "@/lib/redux/slices/movieSlice/Director";

export default interface Movie
{
    _id?:string,
    title?:string,
    year?:number,
    director?:Director,
}