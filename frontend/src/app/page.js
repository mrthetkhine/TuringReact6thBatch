import Image from 'next/image'
//import styles from './page.module.css'
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
          <Tab headers={["Tab1","Tab2","Tab3"]}>
              <div>
                  Page 1
              </div>
              <div>
                  Page 2
              </div>
              <div>
                  Page 3
              </div>
          </Tab>
      </div>
    </main>
  )
}
