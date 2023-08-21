"use client";
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import Review from "@/lib/redux/slices/reviewSlice/Review";
import styles from "@/app/components/Movie/movie.module.css";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css';
import {useState} from "react";

function ReviewUI(props: { review: Review }) {
    const {review} = props;
    const [rating, setRating] = useState(review.rating);
    return <div className={styles.reviewContainer}>
        <div> {review.review}</div>
        <div>
            <Rating style={{ maxWidth: 50 }}
                    value={rating}
                  />
        </div>
    </div>;
}

export default function ReviewList(props: {
    reviews: Review[],
})
{
    const {reviews} = props;
    return (<div>
        {
            reviews.map(review=><ReviewUI key={review._id} review={review}/>)
        }
    </div>);
}