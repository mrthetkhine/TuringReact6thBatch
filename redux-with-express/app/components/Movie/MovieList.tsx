'use client';
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import MovieUI from "@/app/components/Movie/MovieUI";

export default function MovieList(props: { movies: Movie[] })
{
    const {movies} = props;
    return (<div>
        {
            movies.map(movie=><MovieUI
                                key={movie._id}
                                movie={movie}/>)
        }
    </div>);
}