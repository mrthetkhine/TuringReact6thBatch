"use client";
import {forwardRef, useRef} from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {

    const { label, ...otherProps } = props;
    return (
        <label>
            {label}
            <input {...otherProps} ref={ref} />
        </label>
    );
});
export default function ForwardRefDemo()
{
    const ref = useRef(null);

    function handleClick() {
        //ref.current.focus();
        ref.current.style.opacity = 0.5;
    }

    return (<div>
        <form>
            <MyInput label="Enter your name:" ref={ref} />
            <button type="button" onClick={handleClick}>
                Edit
            </button>
        </form>
    </div>)
}