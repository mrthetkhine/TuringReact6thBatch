"use client";
import {useEffect, useState} from "react";

export default function loadingComponent(InputComponent)
{
    return function NewComponent(props)
    {
        console.log('Property loading ',props.loading);
        let [loading,setLoading] = useState(props.loading);

        useEffect(()=>{
            setLoading(props.loading);
        },[props.loading])
        return (<div>
            {
                loading ? <div> Loading....</div>
                        : <InputComponent {...props}
                                          />
            }
        </div>);
    }
}