"use client";
import MovieList from "@/app/components/Movie/MovieList";
import {selectCount, selectMovies, useDispatch, useSelector} from "@/lib/redux";


export default function MovieListPage() {
  console.log('Movie List Page');
  const movies = useSelector(selectMovies);
  const count = useSelector(selectCount);
  console.log('Counter ',count);
  console.log('Movies list ',movies);
  return (<div>
    <MovieList movies={movies}/>
  </div>);
}

