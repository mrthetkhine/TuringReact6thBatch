"use client";
import dynamic from 'next/dynamic'
import {useState} from "react";
import {InputField} from "./InputField";

function Child({child,value,onChange})
{
   //console.log('Child ',child, ' value ',value);
   if(child.type && child.type.name==='InputField')
   {
       return (<InputField {...child.props}
                           onChange={onChange}
                           value={value}
       />);
   }
   else
    {
        //console.log('Render normal element');
        return (<>
            {child}
            </>);
    }
}
export default function OurFormik({initialValues,children,onSubmit})
{
    console.log('Initial Values ',initialValues);
    const [values,setValues] = useState(initialValues);
    //console.log('Values ',values);
    const onChangeHandler = (event)=>{
        //console.log('onChange ',event);
        let value;
        if(event.target.type ==='checkbox')
        {
            value = event.target.checked;
        }
        else
        {
            value = event.target.value;
        }
        //if(event.target.type)
        setValues({
            ...values,
            [event.target.name]: value
        });
    }
    const submitHandler = (event)=>{
        //alert('Form submit');
        event.preventDefault();
        onSubmit(values);
    };
    return (<div>
        <form onSubmit={submitHandler}>
        {
           children.map((child,index)=>{
               //console.log('Child ',child);
               return  <Child key={index}
                              value={values[child.props.name]}
                              child={child}
                              onChange={onChangeHandler}/>
           })
        }
        </form>
    </div>);
}