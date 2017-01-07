/**
 * React Entry Point
 * More Info: https://github.com/hooph00p/react-bulma-template#readme
 */
import Bulma from '../node_modules/bulma/css/bulma.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Style from './style.sass';

function App() {
    return (
        <div>
            <p> Hello, world. </p>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.body
);