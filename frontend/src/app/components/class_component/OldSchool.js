"use client";
import {Component} from "react";

class ChildTwo extends Component
{
    render()
    {
        return (<div>
            Child Two
        </div>);
    }
}
function Child()
{
    return (<div>
        Child
        <ChildTwo/>
    </div>);
}

export default class OldSchool extends Component
{
    render()
    {
        return(<div>
            Class component
            <Child/>
        </div>);
    }
}