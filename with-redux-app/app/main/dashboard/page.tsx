"use client";
//import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';


import {Metadata} from "next";
import {useRouter} from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();
    //const [data,setData] = useState();
    //console.log("render dashbord");
    const btnHandler = ()=>{
        console.log('Go to home');
        router.push('/');
    };
  return (
    <>
      <h1>Dashboard Page </h1>
      <button
          type={"button"}
          className={"btn btn-primary"}
          onClick={btnHandler}
        >Go to home</button>
    </>
  )
}
/*
export const metadata: Metadata = {
    title: 'Dashboard',
}
*/