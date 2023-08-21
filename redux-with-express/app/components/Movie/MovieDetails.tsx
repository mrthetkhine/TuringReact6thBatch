import Movie from "@/lib/redux/slices/movieSlice/Movie";
import styles from "@/app/components/Movie/movie.module.css";
import ReviewList from "@/app/components/Movie/ReviewList";
import Review from "@/lib/redux/slices/reviewSlice/Review";


export default function MovieDetails(props: {
    movie: Movie,
    })
{
    let {movie} = props;

    return (<div >
            <div className={styles.movieContainer}>
                <h3>{movie.title}</h3>
                <div>{movie.director?.name}</div>
                <div>{movie.year}</div>

            </div>


        </div>
    );
}