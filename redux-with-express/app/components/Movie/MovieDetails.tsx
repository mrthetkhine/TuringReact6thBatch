import Movie from "@/lib/redux/slices/movieSlice/Movie";
import styles from "@/app/components/Movie/movie.module.css";

export default function MovieDetails(props: { movie: Movie })
{
    let {movie} = props;
    return (<div className={styles.movieContainer}>
            <h3>{movie.title}</h3>
            <div>{movie.director?.name}</div>
            <div>{movie.year}</div>
            <div>
                <button type={"button"}
                        className={"btn btn-primary"}>
                    Edit
                </button>
            </div>
        </div>
    );
}