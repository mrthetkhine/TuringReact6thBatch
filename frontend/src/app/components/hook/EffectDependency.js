"use client";
import {useEffect, useState} from "react";

export default function EffectDependency()
{
    let [state1,setState1] = useState('one');
    let [state2,setState2] = useState('two');

    useEffect(() => {
        function mouseMove(e) {
            console.log(e.clientX, e.clientY);
        }
        window.addEventListener('mousemove', mouseMove);
        return () => window.removeEventListener('mousemove', mouseMove);
    }, []);
    useEffect(()=>{
        console.log('State1 change , useEffect run');
        return ()=>{
            console.log('Clean up');
        }
    },[state1]);
    console.log('Render');

    const btnChange1Handler = ()=>{
      setState1(new String('One change'));
    };
    const btnChange2Handler = ()=>{
        setState2(new String('Two change'));
    };
    return (<div>
        Effect dependency
        {
            state1
        }
        {state2}
        <button type={"button"}
                onClick={btnChange1Handler}>
            Change state1
        </button>
        <button type={"button"}
                onClick={btnChange2Handler}>
            Change state2
        </button>
    </div>);
}