"use client";

import Review from "@/lib/redux/slices/reviewSlice/Review";
import styles from "@/app/components/Movie/movie.module.css";
import { Rating } from '@smastrom/react-rating'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPencilAlt, faCoffee } from '@fortawesome/fontawesome-free-solid'
import '@smastrom/react-rating/style.css';
import {useState} from "react";
import {deleteMovieAsync} from "@/lib/redux";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal);

function ReviewUI(props: {
    review: Review,
    showEditReviewModal :(review:Review)=>void,
    deleteReview :(review:Review)=>void,
}) {
    const {review} = props;
    const [rating, setRating] = useState(review.rating);
    const btnEditHandler = ()=>{
      console.log('Btn edit');
      props.showEditReviewModal(review);
    };
    const btnShowDeleteConfirm = ()=>{
      //console.log('Show delete confirm');
        MySwal.fire({
            title: 'Are you sure you want to delete review '+review.review,
            text: "Delete review",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('Delete confirmed');
                props.deleteReview(review);
            }
        })
    };
    return <div className={styles.reviewContainer}>

        <div> {review.review}</div>
        &nbsp;
        <div>
            <Rating style={{ maxWidth: 50 }}
                    value={rating}
                  />
        </div>
        &nbsp;
        <div>

            {/*<FontAwesomeIcon
                icon={faPencilAlt}
                onClick={btnEditHandler}
                />*/}
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={btnEditHandler}>
                Edit
            </button>
            &nbsp;
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={btnShowDeleteConfirm}>
                Delete
            </button>
        </div>
    </div>;
}

export default function ReviewList(props: {
    reviews: Review[],
    showEditReviewModal :(review:Review)=>void,
    deleteReview :(review:Review)=>void,
})
{
    const {reviews} = props;
    return (<div>
        {
            reviews.map(review=><ReviewUI
                key={review._id}
                review={review}
                showEditReviewModal={props.showEditReviewModal}
                deleteReview={props.deleteReview}
            />)
        }
    </div>);
}