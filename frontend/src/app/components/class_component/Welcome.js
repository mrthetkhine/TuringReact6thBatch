"use client";
import {Component} from "react";
import PropTypes from "prop-types";

export default class Welcome extends Component
{
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
            {this.props.message}
        </div>);
    }
}
Welcome.propTypes = {
    message: PropTypes.string.isRequired
};