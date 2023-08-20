"use client";
import MovieList from "@/app/components/Movie/MovieList";
import {saveMovieAsync, selectMovies, updateMovieAsync, useDispatch, useSelector} from "@/lib/redux";
import {useEffect, useState} from "react";
import {getAllMovieAsync} from "@/lib/redux/slices/movieSlice/thunks";
import {Button, Modal} from "react-bootstrap";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Movie from "@/lib/redux/slices/movieSlice/Movie";

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


function NewOrUpdateMovieModal(props: {
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
        let movieToUpdate:Movie = {
            ... props.movieToEdit,
        }
        movieToUpdate.title  = values.title;
        console.log('Movie to update ',movieToUpdate);
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

export default function MovieListPage() {
  const [show, setShow] = useState(false);
  const [movieToEdit,setMovieToEdit] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllMovieAsync());
  },[]);

  console.log('Movie List Page');
  const movies = useSelector(selectMovies);

  const editHandler= (movie:Movie)=>{
      console.log('Edit movie ',movie);
      setMovieToEdit(movie);
      handleShow();
  };
  const newBtnHandler = ()=>{
      setMovieToEdit(null);
      handleShow();
  }
  return (<div>
    <button type={"button"}
            className={"btn btn-primary"}
            onClick={newBtnHandler}>
      New Movie
    </button>


    <NewOrUpdateMovieModal
        show={show}
        onHide={handleClose}
        movieToEdit = {movieToEdit}
    />

    <MovieList
        movies={movies}
        editHandler = {editHandler}
        />

  </div>);
}

