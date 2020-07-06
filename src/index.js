'use strict';

import React from "react";
import ReactDOM from "react-dom";
import QuoteBox from "./QuoteBox.js";

// TODO: load data from local file
import DROID_QUOTES from "./droid-quotes.json"

// QuoteBox expects an array of objects with author and text props
ReactDOM.render(<QuoteBox quotes={DROID_QUOTES.quotes}/>, document.getElementById("root"));