'use client';
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import MovieUI from "@/app/components/Movie/MovieUI";

export default function MovieList(props: {
    movies: Movie[],
    editHandler : (movie:Movie)=>void,
    deleteHandler: (movie:Movie)=>void,
})
{
    const {movies} = props;
    return (<div>
        {
            movies.map(movie=><MovieUI
                                key={movie._id}
                                movie={movie}
                                editHandler ={props.editHandler}
                                deleteHandler={props.deleteHandler}
            />)
        }
    </div>);
}