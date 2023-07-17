"use client"

import {InputField} from "./InputField";
import OurFormik from "./OurFormik"; "./OurFormik";

export default function CustomFormikExample()
{
    const formSubmitHandler = (values)=>{
      console.log('Form submit handler in Custom formik ',values);
    };
    return (<OurFormik initialValues={{
                                        username : 'TK',
                                        email : 'test@gmail'
                                    }}
            onSubmit={formSubmitHandler}
    >
        <label htmlFor={"username"}>User Name</label>
        <InputField id={"username"}
                    name="username"
                    className={"form-control"}/>
       <label>Email</label>
        <InputField name="email"
                    className={"form-control"}/>
       <button type={"submit"}
                className={"btn btn-primary"}> Submit</button>
    </OurFormik>)
}