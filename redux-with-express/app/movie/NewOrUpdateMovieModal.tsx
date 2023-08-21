import * as Yup from "yup";
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import {saveMovieAsync, updateMovieAsync, useDispatch} from "@/lib/redux";
import {Button, Modal} from "react-bootstrap";
import {Field, Form, Formik} from "formik";


const MovieSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    year: Yup.number()
        .required('Required'),
    director: Yup.string()
        .required('Required'),
});


export default function NewOrUpdateMovieModal(props: {
    show: boolean,
    onHide: () => void,
    movieToEdit?: Movie
}) {
    const dispatch = useDispatch();

    function saveMovieAction(values: FormikValues) {
        let director = {
            name: values.director
        };
        let movie: Movie = {
            title: values.title,
            year: values.year,
            director
        }
        console.log('Movie to save ', movie);
        dispatch(saveMovieAsync(movie))
            .unwrap()
            .then(result => {
                console.log('Redux action result ', result);
                props.onHide();
            });
    }
    function updateMovieAction(values: FormikValues) {
        console.log('Typeof value ',typeof values);
        console.log('Value name ',values.name);
        let movieToUpdate:Movie = {
            ... props.movieToEdit,
        }
        movieToUpdate.title  = values.title;

        movieToUpdate.director = {
            ... props.movieToEdit?.director,
            name : values.director
        }
        movieToUpdate.year = values.year;
        console.log('Movie to update 2 ', movieToUpdate);
        dispatch(updateMovieAsync(movieToUpdate))
            .unwrap()
            .then(result => {
                console.log('Redux action result ', result);
                props.onHide();
            });
    }
    function saveOrUpdateMovie(values: FormikValues) {
        // same shape as initial values
        console.log('form values ',values);
        if( props.movieToEdit)
        {
            updateMovieAction(values);
        }
        else
        {
            saveMovieAction(values);
        }
        //props.onHide();
    }

    return <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>{props.movieToEdit? 'Update Movie': 'New Movie'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Formik  initialValues={{
                title: props.movieToEdit? props.movieToEdit.title:'',
                year: props.movieToEdit? props.movieToEdit.year:'',
                director: props.movieToEdit? props.movieToEdit.director?.name:'',
            }}
                     validationSchema={MovieSchema}
                     onSubmit={values => {
                         saveOrUpdateMovie(values);
                     }}
            >
                {({ errors, touched }) => (
                    <Form>

                        <label htmlFor="title">Title</label>
                        <Field name="title"
                               className={"form-control"}/>
                        {errors.title && touched.title ? (
                            <div className={"alert alert-danger"}>{errors.title}</div>
                        ) : null}

                        <label htmlFor="year">Year</label>
                        <Field name="year"
                               className={"form-control"}/>

                        {errors.year && touched.year ? (
                            <div className={"alert alert-danger"}>{errors.year}</div>
                        ) : null}

                        <label htmlFor="director">Director</label>
                        <Field name="director"
                               className={"form-control"}/>
                        {errors.director && touched.director ?
                            <div className={"alert alert-danger"}>{errors.director}</div> : null}

                        <Modal.Footer>
                            <button type="submit"
                                    className={"btn btn-primary"}>
                                {props.movieToEdit? 'Update': 'Save'}
                            </button>
                            <Button  onClick={props.onHide}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Form>
                )}


            </Formik>

        </Modal.Body>

    </Modal>;

}