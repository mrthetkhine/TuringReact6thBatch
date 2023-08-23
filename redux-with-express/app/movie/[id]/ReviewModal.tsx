import * as Yup from "yup";
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import {saveMovieAsync, saveReviewAsync, updateMovieAsync, updateReviewAsync, useDispatch} from "@/lib/redux";
import {Button, Modal} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {Rating} from "@smastrom/react-rating";
import Review from "@/lib/redux/slices/reviewSlice/Review";


const ReviewSchema = Yup.object().shape({
    review: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

});
export default function ReviewModal(props: {
    show: boolean,
    onHide: () => void,
    addReview:(review:any)=>void,
    movie:Movie,
    reviewToEdit?:Review,
})
{
    const [rating, setRating] = useState(0);
    useEffect(()=>{
        if(props.reviewToEdit)
        {
            setRating(props.reviewToEdit.rating);
        }
        else
        {
            setRating(0);
        }
    },[props.reviewToEdit]);


    const dispatch = useDispatch();

    function saveOrUpdateReview(values: FormikValues) {
        let model = {
            ...values,
            rating,
            movie: props.movie._id
        };
        console.log(model);
        if(props.reviewToEdit)
        {
            model._id = props.reviewToEdit._id;
            console.log('Update Action ',model);
            dispatch(updateReviewAsync(model))
                .unwrap()
                .then(response => props.onHide());
        }
        else
        {
            dispatch(saveReviewAsync(model))
                .unwrap()
                .then(response => props.onHide());
        }

    }

    return <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>{props.reviewToEdit?'Edit Review':'New Review'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Formik  initialValues={{
                review:props.reviewToEdit?props.reviewToEdit.review : '',
                //rating: rating
            }}
                     validationSchema={ReviewSchema}
                     onSubmit={values => {
                         //console.log(values);
                         saveOrUpdateReview(values);

                     }}
            >
                {({ errors, touched }) => (
                    <Form>

                        <label htmlFor="review">Review</label>
                        <Field name="review"
                               className={"form-control"}/>
                        {errors.review && touched.review ? (
                            <div className={"alert alert-danger"}>{errors.review}</div>
                        ) : null}

                        <label>Rating</label>
                        <div>
                            <Rating style={{ maxWidth: 100 }}
                                    value={rating}
                                    onChange={setRating}
                            />
                        </div>

                        &nbsp;
                        <Modal.Footer>
                            <button type="submit"
                                    className={"btn btn-primary"}>
                                {props.reviewToEdit?'Update':'Save'}
                            </button>
                            <Button  onClick={props.onHide}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Form>
                )}


            </Formik>
        </Modal.Body>
    </Modal>
}
