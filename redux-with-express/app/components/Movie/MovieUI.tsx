"use client";
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import styles from './movie.module.css';
import {useRouter} from "next/navigation";
export default function MovieUI(props: { movie: Movie }) {
    let router = useRouter();
    let {movie} = props;
    const btnDetailHandler = ()=>{
        router.push(`/movie/${movie._id}`);
    };

    return (<div className={styles.movieContainer}>
               <h3>{movie.title}</h3>
                <div>{movie.director?.name}</div>
                <div>{movie.year}</div>
                <div>
                    <button type={"button"}
                            className={"btn btn-primary"}
                            onClick={btnDetailHandler}>
                        Details
                    </button>
                </div>
        </div>
    );

}
