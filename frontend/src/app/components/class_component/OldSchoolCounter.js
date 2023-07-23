"use client";

import {Component, useState} from "react";

export default class OldSchoolCounter extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            counter : 0,
            another : 'Something'
        };
        /*
        this.state = {
            another : 'Something'
        }

         */
        //let [state,setState]=useState('');
        this.incHandler = this.incHandler.bind(this);
        console.log('OldSchol counter constructor');
    }
    incHandler()
    {
        console.log('this ',this);
        this.setState({
            counter : this.state.counter + 1
        });
        this.setState({
            counter : this.state.counter + 1
        });
        console.log('After set state');
    }
    componentDidMount() {
        console.log('OldSchol counter didMount');
    }

    componentWillUnmount() {
        console.log('OldSchol counter will unmount');
    }
    render() {

        console.log('OldSchol counter render');
        return (<div>
            Message {this.state.another}<p/>

            Old school counter { this.state.counter}
            <button type={"button"}
                    onClick={()=>this.incHandler()}>Inc</button>
        </div>);
    }
}