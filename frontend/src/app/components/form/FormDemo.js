"use client";
import {useState} from "react";

export default function FormDemo()
{
    const [form,setForm] = useState({
        email: '',
        password: '',
        checkout: false
    });


    const onChangeHandler = (event)=>{
        console.log('Type ',event.target.type);
        console.log('Event ',event.target.value );

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
        setForm({
            ...form,
            [event.target.name]: value
        });
    };
    const onSubmit = (event)=>{
        event.preventDefault();
        console.log('Form ',form);
    }
    return (<div>
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email"
                       className="form-control"
                       id="exampleInputEmail1"
                       name = "email"
                       aria-describedby="emailHelp"
                       value={form.email}
                       onChange={onChangeHandler}
                       placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password"
                       className="form-control"
                       id="exampleInputPassword1"
                       name = "password"
                       value={form.password}
                       onChange={onChangeHandler}
                       placeholder="Password"/>
            </div>
            <div className="form-check">
                <input type="checkbox"
                       className="form-check-input"
                       name="checkout"
                       value={form.checkout}
                       onChange={onChangeHandler}
                       id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit"
                    className="btn btn-primary"
                    onClick={onSubmit}
            >Submit
            </button>
        </form>
    </div>);
}