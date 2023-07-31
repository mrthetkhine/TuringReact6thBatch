/* Components */
import 'bootstrap/dist/css/bootstrap.css';
import { Counter } from './components/Counter/Counter'
import HelloWorld from "@/app/components/HelloWorld";
import TodoListView from "@/app/components/Todo/TodoListView";
import CounterWithState from "@/app/components/CounterWithState";
import TodoWithRedux from "@/app/components/TodoWithRedux/TodoWithRedux";

export default function IndexPage() {
  return (<div>
    {/*<HelloWorld message={"how are you"}/>*/}
   {/* <TodoListView/>*/}
    {/*<CounterWithState/>*/}
    {/*<Counter />*/}
    <TodoWithRedux/>
  </div>)
}

export const metadata = {
  title: 'Redux Toolkit',
}
