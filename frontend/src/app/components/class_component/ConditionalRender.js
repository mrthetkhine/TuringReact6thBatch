"use client";
import {Component} from "react";

export default class ConditionalRender extends Component
{
    render() {
        const count = 0;
        return (
            <div>
                {count && <h1>Messages: {count}</h1>}
                <p/>
                Zero {0}
                <p/>
                False {false}
                <p/>
                Null {null}
                <p/>
                Undefined {undefined}
                <p/>
            </div>
        );
    }
}