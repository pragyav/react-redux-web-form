import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./header";
import InfoForm from "./info-form";
import SkillsForm from "./skills-form";
import PortfolioForm from "./portfolio-form";

class MainLayout extends Component {
    render() {    
        return (     
            <div className="page">
                <Header />
                <div className="header">
                    <h2>Let's talk</h2>
                    <p>Think you have what it takes? Show us.</p>
                </div> 
                <Switch>
                    <Route path={`${this.props.match.path}/info-form`} component={InfoForm}/>        
                    <Route path={`${this.props.match.path}/skills-form`} component={SkillsForm}/>      
                    <Route path={`${this.props.match.path}/portfolio-form`} component={PortfolioForm} />
                    <Route path={`${this.props.match.path}`} component={InfoForm} />
                </Switch>         
            </div>
        );
    }
}

export default withRouter(MainLayout);