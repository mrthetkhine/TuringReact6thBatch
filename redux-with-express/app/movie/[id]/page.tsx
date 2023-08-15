
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import MovieDetails from "@/app/components/Movie/MovieDetails";

const movie:Movie ={
      "_id": "64a00b0ddb2bbb0535da6cfb",
      "title": "Dark Night",
      "director": {
        "name": "Christopher Nolan",
        "phoneNo": "09993",
        "_id": "64a00beedb2bbb0535da6d0b"
      },
      "year": 2500,
      "__v": 0
    };
export default function MoviePage({ params }: { params: { id: string } }) {
  return (<div>
   <MovieDetails movie={movie}/>
  </div>);
}

