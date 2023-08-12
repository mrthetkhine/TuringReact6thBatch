import {Providers} from "@/lib/providers";
import styles from "@/app/styles/layout.module.css";

import React, {useState} from "react";

export default function ParallelLayout(props: {
    children: React.ReactNode
    analytic: React.ReactNode
    team: React.ReactNode
})
{
    //const [data,setData] = useState();
    return (
        <>
            {props.children}
            {props.team}
            {props.analytic}
        </>
    )
}