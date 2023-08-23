"use client";
import * as Yup from "yup";
import {Button, Modal} from "react-bootstrap";
import {Field, Form, Formik} from "formik";

const LoginSchema = Yup.object().shape({
    userName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .required('Required'),
});

export default function LoginForm()
{
    return (
        <div
            className="modal show container-lg"
            style={{ display: 'block', position: 'initial' }}
        >
        <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Formik  initialValues={{
                userName: '',
                password:'',
            }}
                     validationSchema={LoginSchema}
                     onSubmit={values => {
                        console.log('Submit ',values);
                     }}
            >
                {({ errors, touched }) => (
                    <Form>

                        <label htmlFor="userName">Username</label>
                        <Field name="userName"
                               className={"form-control"}/>
                        {errors.userName && touched.userName ? (
                            <div className={"alert alert-danger"}>{errors.userName}</div>
                        ) : null}

                        <label htmlFor="password">Password</label>
                        <Field name="password"
                               type={"password"}
                               className={"form-control"}/>

                        {errors.password && touched.password ? (
                            <div className={"alert alert-danger"}>{errors.password}</div>
                        ) : null}



                        <Modal.Footer>
                            <button type="submit"
                                    className={"btn btn-primary"}>
                            Login
                            </button>

                        </Modal.Footer>
                    </Form>
                )}


            </Formik>

        </Modal.Body>

    </Modal.Dialog>
        </div>);

}