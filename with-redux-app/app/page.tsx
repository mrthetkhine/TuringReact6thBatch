/* Components */
import 'bootstrap/dist/css/bootstrap.css';
import {Suspense} from "react";
import { Counter } from './components/Counter/Counter'
import HelloWorld from "@/app/components/HelloWorld";
import TodoListView from "@/app/components/Todo/TodoListView";
import CounterWithState from "@/app/components/CounterWithState";
import TodoWithRedux from "@/app/components/TodoWithRedux/TodoWithRedux";
import Loading from "@/app/loading";
import PhotoView from "@/app/components/photo/PhotoView";

export default function IndexPage() {
  //throw new Error('Got something bad');
  return (<div>
    {/*<HelloWorld message={"how are you"}/>*/}
   {/* <TodoListView/>*/}
    {/*<CounterWithState/>*/}
{/*    <Counter />*/}
    <Suspense fallback={<Loading/>}>

    </Suspense>
    <TodoWithRedux/>
   {/* <PhotoView/>*/}
  </div>)
}

export const metadata = {
  title: 'Redux Toolkit',
}
