import Image from 'next/image'
//import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import HelloWorld,{Another} from "./components/HelloWorld";
import JsxExample from "./components/JsxExample";
import Avatar from "./components/Avatar";
import Greet from "./components/Greet";
import Profile from "./components/Profile";
import ItemList from "./components/ItemList";
import CustomButton from "./components/CustomButton";
import Counter from "./components/Counter";
import ListDynamic from "./components/ListDynamic";
import SpecificCounter from "./components/SpecificCounter";
import Clock from "./components/Clock";
import ToDoListUI from "./components/ToDoListUI";
import Tab from "./components/Tab";
import ResetCounter from "./components/ResetCounter";
import CounterReducer from "./components/reducer/CounterReducer";
import TodoListWithReducer from "./components/reducer/TodoListWithReducer";
import ToDoListWithReducerTwo, {TodoInput} from "./components/reducer/ToDoListWithReducerTwo";
import ReuseComponent from "./components/reducer/ReuseComponent";
import ContextDemo from "./components/context/ContextDemo";
import ScalingWithContext from "./components/context/ScalingWithContext";
export default function Home() {
    const items = ["one","two","three"];
  return (
    <main >
      <div >
        {/*  <HelloWorld/>
         <JsxExample/>*/}
       {/* <Avatar/>*/}
            {/*<Greet message={"Hello World"}
                    label={"Not something"}/>
          <Greet message={"Good evening"}/>
          <Greet />*/}
        {/*  <Profile isAdmin={false}/>
          <Profile isAdmin={true}/>*/}
         {/* <ItemList items={items}/>*/}
         {/* <CustomButton/>*/}
         {/* <Counter/>
          <Counter/>*/}
          {/*<Clock/>*/}
       {/*  <ListDynamic/>*/}
        {/*  <SpecificCounter />*/}
         {/* <ToDoListUI/>*/}
         {/* <Tab headers={["Tab1","Tab2","Tab3"]}>
              <div>
                  Page 1
              </div>
              <div>
                  Page 2
              </div>
              <div>
                  Page 3
              </div>
          </Tab>*/}
         {/* <ResetCounter/>*/}
        {/*  <CounterReducer/>*/}
      {/*    <TodoListWithReducer/>*/}
        {/* <ToDoListWithReducerTwo/>
          <ReuseComponent/>*/}
        {/*  <ContextDemo/>*/}
          <ScalingWithContext/>
      </div>
    </main>
  )
}
