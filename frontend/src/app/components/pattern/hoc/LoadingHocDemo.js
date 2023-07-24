"use client";
import loadingComponent from "./loadingComponent";
import {useEffect, useState} from "react";

function Page1({completeHandler})
{

    return (<div>
        Page 1
    </div>);
}
let Page1WithLoading = loadingComponent(Page1);
export default function LoadingHocDemo()
{
    let [loading,setLoading] = useState(true);
    useEffect(()=>{
        console.log("use effect in parent called");
        setTimeout(()=>{
            console.log('Fired settimeout');
            setLoading(false);
        },2000);
    },[])
    return (<div>
        <Page1WithLoading loading={loading}/>
    </div>)
}