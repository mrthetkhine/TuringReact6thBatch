import { NextResponse } from 'next/server'
import exp from "constants";
import {headers} from "next/headers";

let todos =  [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
];
export async function GET(req: Request, res: Response) {
    //let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    //const todos = await  response.json();
    return NextResponse.json(todos);
}
export async function POST(req: Request, res: Response) {
    let headerList = headers();
    console.log('Headers ',headerList.get('referer'));
    let body =await req.json();
    todos.push(body);
    return NextResponse.json(body);
}