"use client";
import logComponent from "./logComponent";
import Clock from "../../Clock";

function Demo()
{
    return (<div>
        Just plain component
    </div>);
}
let LoggedComponent = logComponent(Clock);
export default function HocDemo()
{
    return (<LoggedComponent/>);
}