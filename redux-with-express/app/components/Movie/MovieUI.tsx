"use client";
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import styles from './movie.module.css';
import {useRouter} from "next/navigation";
export default function MovieUI(props: {
    movie: Movie,
    editHandler : (movie:Movie)=>void
}) {
    let router = useRouter();
    let {movie} = props;
    const btnDetailHandler = ()=>{
        router.push(`/movie/${movie._id}`);
    };

    const btnEditHandler = ()=>{
        props.editHandler(movie);
    }
    return (<div className={styles.movieContainer}>
               <h3>{movie.title}</h3>
                <div>{movie.director?.name}</div>
                <div>{movie.year}</div>
                <div>
                    <button type={"button"}
                            className={"btn btn-primary"}
                            onClick={btnEditHandler}>
                        Edit
                    </button>
                    &nbsp;
                    <button type={"button"}
                            className={"btn btn-primary"}
                            onClick={btnDetailHandler}>
                        Details
                    </button>

                </div>
        </div>
    );

}
