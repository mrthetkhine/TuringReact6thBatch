"use client";
import './Tab.css'
import {useState} from "react";

function TabHeader(props) {
    return <div className={"tab-header"}
                onClick={props.onClick}>
        {props.title}
    </div>;
}

function TabBody(props) {
    return (
        <div>
            <div className={"tab-page"}>
                {props.children[props.activeTab]}
            </div>
        </div>
    );
}

export default function Tab({headers,children})
{
    console.log('Render tab');
    const [activeTab,setActiveTab] = useState(0);

    const changeTabHandler = (index)=>{
        console.log('Change Tab handler');
        setActiveTab(index);
    }
    return (<div>
        {
            headers.map((title, index) =>
                <TabHeader key={index}
                           onClick={() => changeTabHandler(index)}
                           title={title}/>)

        }
        <TabBody children={children}
                 activeTab={activeTab}/>



    </div>);
}