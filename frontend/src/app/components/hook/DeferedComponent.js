"use client";
import {useState, Suspense, useMemo, useDeferredValue} from "react";

function getComputedValue(name)
{
    return [
        "One",
        "Two",
        "Three"
    ];
}
export default function DeferedComponent()
{
    const [name, setName] = useState('');
    const deferredName = useDeferredValue(name);

    const LIST_SIZE= 10000;

    const list = useMemo(() => {
        const dataList = [];
        for (let i = 0; i < LIST_SIZE; i++) {
            dataList.push(deferredName);
        }
        return dataList;
    }, [deferredName]);

    const handleChange = (e) => {
        const { value } = e.target;
        setName(value);
    };

    return (
        <div>
            <input type='text' value={name} onChange={handleChange} />
            <div>
                {list.map((item,index) => {
                    return <div key={index}>
                        {item}
                    </div>;
                })}
            </div>
        </div>
    );
}