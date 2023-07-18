"use client"
import {useId, useState} from "react";

export default function Unique()
{
    let id = useId();
    const [sate,setState]= useState(id);
    return <div>
        {sate}

    </div>
}