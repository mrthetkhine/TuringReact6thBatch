"use client";
import {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h3>Something went wrong.</h3>;
        }

        return this.props.children;
    }
}
class Problem extends  Component
{
    render() {
        let str = "hello";
        return (<div>
            {str.toUpperCase()}
        </div>)
    }
}
export default class ProblemComponent extends Component
{
   render() {
       return <ErrorBoundary>
           <Problem/>
       </ErrorBoundary>
   }
}