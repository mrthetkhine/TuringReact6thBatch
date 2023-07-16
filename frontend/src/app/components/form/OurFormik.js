"use client";
import {useState} from "react";

export function InputField(props)
{
    return(<input {...props}>

        </input>);
}
function Child({child,values})
{
   console.log('Child prop ',child.props.name);
    return (<InputField {...child.props}
                        value={values[child.props.name]}>

    </InputField>);
}
export default function OurFormik({initialValues,children})
{
    console.log('Initial Values ',initialValues);
    const [values,setValues] = useState(initialValues);
    return (<div>

        {
           children.map((child,index)=>
                <Child key={index}
                       values={values}
                       child={child}/>)
        }
    </div>);
}