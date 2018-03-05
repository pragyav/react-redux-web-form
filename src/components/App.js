import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MainLayout from "./mainLayout";
import styles from "../styles/components/App.scss";

class App extends Component {  
    
    render() {
        console.log("styles: ",styles);
        return (              
            <div className={styles.page}>
                <BrowserRouter>
                    <div>     
                        <Switch>            
                            <Route path="/home" component= {MainLayout} />
                            <Route exact path="/" render = {() => <Redirect to="/home"/>} />
                            <Route render = {() => <h1> 404 Page Not Found! </h1>} />
                        </Switch>
                    </div>     
                </BrowserRouter> 
            </div>            
        );
    }
}

export default App;
