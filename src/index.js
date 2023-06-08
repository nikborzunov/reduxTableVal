import * as ReactDOMClient from "react-dom/client";
import store from "./Redux/reduxStore";
import React from "react"
import App from './App'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
document.getElementById('app')

const app = ReactDOMClient.createRoot(document.getElementById("app"));
app.render(<BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
</BrowserRouter>)