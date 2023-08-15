/* Instruments */
import {counterSlice, movieSlice} from './slices'


export const reducer = {
  counter: counterSlice.reducer,
  movie: movieSlice.reducer,
}
