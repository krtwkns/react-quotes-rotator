/***  examples/src/index.js ***/
import React from 'react';
import { render} from 'react-dom';
import QuotesRotator from "../src";
import {quotes} from './constant/data';
const App = () => (
    <QuotesRotator data={quotes} progressBarColor="#B5D43C" backgroundColor="#fff" textColor="#212121" timer="5000"/>
);
render(<App />, document.getElementById("root"));