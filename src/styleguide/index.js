import React from "react";
import ReactDOM from "react-dom";
import Header from './header'
import Router from './router'
import { BrowserRouter} from "react-router-dom";

const Styleguide = () => (
    <div className="styleguide">
        <Header />
        <Router />
    </div>
)

ReactDOM.render(
    <BrowserRouter>
        <Styleguide />
    </BrowserRouter>
    , document.getElementById("root")
)

module.hot.accept(Styleguide)