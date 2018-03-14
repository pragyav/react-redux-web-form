import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import { I18nextProvider } from "react-i18next";
import reducer from "./redux/reducers";
import "./index.css";
import App from "./components/App";
import i18n from "./i18n";
import registerServiceWorker from "./registerServiceWorker";

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

  
ReactDOM.render(
    <Provider store={store}>
        <I18nextProvider i18n={ i18n }><App />
        </I18nextProvider></Provider>, document.getElementById("root"));
registerServiceWorker();