"use client";
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const AnotherBasicForm = () => (
    <div>
        <h1>Sign Up</h1>
        <Formik
            initialValues={{
                firstName: 'TK',
                lastName: '',
                email: '',
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form>
                <label htmlFor="firstName">First Name</label>
                <Field id="firstName"
                       name="firstName"
                       placeholder="Jane"
                       className={"form-control"}/>

                <label htmlFor="lastName">Last Name</label>
                <Field id="lastName"
                       name="lastName"
                       placeholder="Doe"
                       className={"form-control"}/>

                <label htmlFor="email">Email</label>
                <Field
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                    className={"form-control"}
                />
                <button type="submit" className={"btn btn-primary"}>Submit</button>
            </Form>
        </Formik>
    </div>
);
export default AnotherBasicForm;

