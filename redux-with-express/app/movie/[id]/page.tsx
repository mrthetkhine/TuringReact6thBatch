"use client";
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import MovieDetails from "@/app/components/Movie/MovieDetails";
import {useEffect} from "react";
import {getMovieById, selectMovies, useSelector} from "@/lib/redux";
import {useRouter} from "next/navigation";
/*
const movie:Movie ={
      "_id": "64a00b0ddb2bbb0535da6cfb",
      "title": "Dark Night",
      "director": {
        "name": "Christopher Nolan",
        "phoneNo": "09993",
        "_id": "64a00beedb2bbb0535da6d0b"
      },
      "year": 2500,

    };

 */
export default function MoviePage({ params }: { params: { id: string } }) {

    const router = useRouter();
    const movies = useSelector(selectMovies);
    const movie = getMovieById(movies,params.id);

    const btnBackHandler = ()=>{
        router.push('/movie');
    };
    return (<div>
            <MovieDetails movie={movie}/>
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={btnBackHandler}>
                Back
            </button>
      </div>);
}

