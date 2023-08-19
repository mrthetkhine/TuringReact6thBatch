"use client";
import MovieList from "@/app/components/Movie/MovieList";
import { selectMovies, useDispatch, useSelector} from "@/lib/redux";
import {useEffect, useState} from "react";
import {getAllMovieAsync} from "@/lib/redux/slices/movieSlice/thunks";
import {Button, Modal} from "react-bootstrap";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

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


function NewMovieModal(props: { show: boolean, onHide: () => void }) {
  return <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>
      <Modal.Title>New Movie</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Formik  initialValues={{
            title: '',
            year: '',
            director: '',
          }}
           validationSchema={MovieSchema}
           onSubmit={values => {
             // same shape as initial values
             console.log(values);
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


              <button type="submit"
                      className={"btn btn-primary"}>Submit</button>
            </Form>
        )}
      </Formik>

    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.onHide}>
        Close
      </Button>
      <Button variant="primary" onClick={props.onHide}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>;
}

export default function MovieListPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllMovieAsync());
  },[]);

  console.log('Movie List Page');
  const movies = useSelector(selectMovies);

  return (<div>
    <button type={"button"}
            className={"btn btn-primary"}
            onClick={handleShow}>
      New Movie
    </button>


    <NewMovieModal show={show} onHide={handleClose}/>

    <MovieList movies={movies}/>

  </div>);
}

