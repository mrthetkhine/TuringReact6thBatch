/* Instruments */
import {counterSlice, movieSlice, reviewSlice} from './slices'


export const reducer = {
  counter: counterSlice.reducer,
  movie: movieSlice.reducer,
  review: reviewSlice.reducer,
}
