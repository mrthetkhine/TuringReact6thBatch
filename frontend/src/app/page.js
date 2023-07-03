import Image from 'next/image'
//import styles from './page.module.css'
import HelloWorld,{Another} from "./components/HelloWorld";
import JsxExample from "./components/JsxExample";
import Avatar from "./components/Avatar";
import Greet from "./components/Greet";
import Profile from "./components/Profile";

export default function Home() {
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
          <Profile isAdmin={false}/>
          <Profile isAdmin={true}/>
      </div>
    </main>
  )
}
