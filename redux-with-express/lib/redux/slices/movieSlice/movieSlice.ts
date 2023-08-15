import Movie from "@/lib/redux/slices/movieSlice/Movie";
import {createSlice} from "@reduxjs/toolkit";

export interface MovieSliceState {
    movies:Movie[],
}

const initialState : MovieSliceState = {
    movies:[
    {
        "_id": "64a00b0ddb2bbb0535da6cfb",
        "title": "Dark Night",
        "director": {
            "name": "Christopher Nolan",
            "phoneNo": "09993",
            "_id": "64a00beedb2bbb0535da6d0b"
        },
        "year": 2500,
        "__v": 0
    },
    {
        "_id": "64a00b49db2bbb0535da6cff",
        "title": "Avata 1",
        "director": {
            "name": "Jame Cameron",
            "phoneNo": "09993",
            "_id": "64a00b49db2bbb0535da6d00"
        },
        "year": 2000,
        "__v": 0
    },
    {
        "_id": "64a00b52db2bbb0535da6d02",
        "title": "Avata 2",
        "director": {
            "name": "Jame Cameron",
            "phoneNo": "09993",
            "_id": "64a00b52db2bbb0535da6d03"
        },
        "year": 2023,
        "__v": 0
    },
    {
        "_id": "64a00b8ddb2bbb0535da6d06",
        "title": "Avata 23",
        "director": {
            "name": "Jame Cameron",
            "phoneNo": "09993",
            "_id": "64a00b49db2bbb0535da6d00"
        },
        "year": 2025,
        "__v": 0
    }
]
};


export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {}
});