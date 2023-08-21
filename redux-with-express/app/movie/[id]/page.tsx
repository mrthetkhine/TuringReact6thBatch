"use client";
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import MovieDetails from "@/app/components/Movie/MovieDetails";
import {useEffect, useState} from "react";
import {
    getAllMovieAsync,
    getAllReviewByMovieAsync,
    getMovieById,
    selectMovies,
    selectReviews,
    useDispatch,
    useSelector
} from "@/lib/redux";
import {useRouter} from "next/navigation";
import ReviewList from "@/app/components/Movie/ReviewList";
import ReviewModal from "@/app/movie/[id]/ReviewModal";

export default function MoviePage({ params }: { params: { id: string } }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const router = useRouter();
    const movies = useSelector(selectMovies);
    const movie = getMovieById(movies,params.id);
    const reviews = useSelector(selectReviews);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllReviewByMovieAsync(movie._id));
    },[]);
    const btnBackHandler = ()=>{
        router.push('/movie');
    };
    const btnNewReviewHandler=()=>{
      console.log('New Review handler');
      handleShow();
    };
    return (<div>
            <MovieDetails movie={movie}
                         />
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={btnNewReviewHandler}>
                New Review
            </button>
            <ReviewModal show={show} onHide={handleClose}/>
           <div/>

            <ReviewList reviews={reviews}/>
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={btnBackHandler}>
                Back
            </button>
      </div>);
}

