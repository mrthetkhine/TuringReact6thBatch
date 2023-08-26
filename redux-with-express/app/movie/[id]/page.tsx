"use client";
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import MovieDetails from "@/app/components/Movie/MovieDetails";
import {useEffect, useState} from "react";
import {
    deleteReviewAsync,
    getAllMovieAsync,
    getAllReviewByMovieAsync,
    getMovieById, reviewSlice, saveReviewAsync,
    selectMovies,
    selectReviews,
    useDispatch,
    useSelector
} from "@/lib/redux";
import {useRouter} from "next/navigation";
import ReviewList from "@/app/components/Movie/ReviewList";
import ReviewModal from "@/app/movie/[id]/ReviewModal";
import Review from "@/lib/redux/slices/reviewSlice/Review";
import IsAuth from "@/app/components/Auth/IsAuth";

function MoviePage({ params }: { params: { id: string } }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [reviewToEdit, setReviewToEdit] = useState(null);
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
      setReviewToEdit(null);
      handleShow();
    };
    const editReviewHandler =(review:Review)=>{
      console.log('Edit review ',review);
      setReviewToEdit(review);
      handleShow();
    };
    const deleteReview =(review : Review)=>{
        console.log('Delete review ',review);
        dispatch(deleteReviewAsync(review));
    };

    return (<div>
            <MovieDetails movie={movie}
                         />
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={btnNewReviewHandler}>
                New Review
            </button>
            <ReviewModal
                movie={movie}
                show={show}
                onHide={handleClose}
                reviewToEdit={reviewToEdit}
            />
           <div/>

            <ReviewList
                reviews={reviews}
                showEditReviewModal ={editReviewHandler}
                deleteReview={deleteReview}
            />
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={btnBackHandler}>
                Back
            </button>
      </div>);
}

export default IsAuth(MoviePage);