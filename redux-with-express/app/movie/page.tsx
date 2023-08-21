"use client";
import MovieList from "@/app/components/Movie/MovieList";
import {deleteMovieAsync, saveMovieAsync, selectMovies, updateMovieAsync, useDispatch, useSelector} from "@/lib/redux";
import {useEffect, useState} from "react";
import {getAllMovieAsync} from "@/lib/redux/slices/movieSlice/thunks";
import {Button, Modal} from "react-bootstrap";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import NewOrUpdateMovieModal from "@/app/movie/NewOrUpdateMovieModal";

const MySwal = withReactContent(Swal);

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
  const deleteHandler =(movie:Movie)=>{
      console.log('Delete Handler ',movie);
      MySwal.fire({
          title: 'Are you sure you want to delete movie '+movie.title,
          text: "Delete movie",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes'
      }).then((result) => {
          if (result.isConfirmed) {
              console.log('Delete confirmed');
              dispatch(deleteMovieAsync(movie));
          }
      })
  }
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
        deleteHandler = {deleteHandler}
        />

  </div>);
}

