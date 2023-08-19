import type { ReduxState } from '@/lib/redux'
import Movie from "@/lib/redux/slices/movieSlice/Movie";

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMovies = (state: ReduxState) => state.movie.movies;
export const getMovieById = (movies:Movie[],id: string) =>
                                            movies.find(movie=>movie._id==id)