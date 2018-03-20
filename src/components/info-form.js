/* @flow */
import React from "react";
import { Field, reduxForm } from "redux-form";
import type { FormProps } from "redux-form";
import styles from "../styles/components/info-form.scss";
import stylesApp from "../styles/components/App.scss";

console.log("styles: ",styles);

const validate = values => {
    const errors = {};
    const nameReg = /^[a-zA-Z][a-zA-Z0-9-_.\s]{2,20}/;
    const phoneReg = /^(\+|00)358-?0?(457|50|4[0-9])-?\d{7}/;
    const emailReg = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/;
    const addressReg = /\w+(\s\w+)*/; 
    const cityReg = /[a-zA-Z]{2,}/;
    const stateReg = /[a-zA-Z]{2,}/;
    const countryReg = /[a-zA-Z]{2,}/;
    const zipcodeReg = /[0-9]{5}/;
    const how_did_you_hearReg = /\w+(\s\w+)*/;

    if (!values.name) {
        errors.name = "Required";
    } else if (!nameReg.test(values.name)) {
        errors.name = "Not a valid name !";
    }
    if (!values.phone) {
        errors.phone = "Required";
    } else if (!phoneReg.test(values.phone)) {
        errors.phone = "Not a valid phone number !";
    }
    if (!values.email1) {
        errors.email1 = "Required";
    } else if (!emailReg.test(values.email1)) {
        errors.email1 = "Not a valid email !";
    }
    if (!values.email2) {
        errors.email2 = "Required";
    } else if ((values.email2 !== values.email1)) {
        errors.email2 = "Please re-enter email !";
    }
    if (!values.address) {
        errors.address = "Required";
    } else if (!addressReg.test(values.address)) {
        errors.address = "Not a valid address !";
    }
    if (!values.city) {
        errors.city = "Required";
    } else if (!cityReg.test(values.city)) {
        errors.city = "Not a valid city !";
    }
    if (!stateReg.test(values.state)) {
        errors.state = "Not a valid state !";
    }
    if (!values.country) {
        errors.country = "Required";
    } else if (!countryReg.test(values.country)) {
        errors.country = "Not a valid country !";
    }
    if (!zipcodeReg.test(values.zipcode)) {
        errors.zipcode = "Not a valid zipcode !";
    }
    if (!how_did_you_hearReg.test(values.how_did_you_hear)) {
        errors.how_did_you_hear = "Please enter the details *";
    }
    return errors;
};

const renderField = ({ input, label, type, placeholder, meta: { touched, error } }: {
    input: Object;
    label: string;
    type: string;
    placeholder: string;   
    meta: {
            touched: any;
            error: string;
        };
    }): Object => (   
    <div>
        <input {...input} placeholder={placeholder} type={type} />
        {touched &&
            ((error && <span>{error}</span>))}
    </div> 
);

type Props = FormProps

const InfoForm = (props: Props ) => {

    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <p>1. Personal information</p>
                <hr />
            </div>
            <div className={styles["name-phone"]}>
                <div className={styles["half-name"]}>
                    <Field           
                        type="text"          
                        name="name"
                        component={renderField} 
                        placeholder="Full name*"           
                    />
                </div>
                <div className={styles["half-phone"]}>
                    <Field            
                        type="text"          
                        name="phone"
                        component={renderField}
                        placeholder="Phone*"          
                    />          
                </div>
            </div>
            <div>
                <Field
                    type="email"          
                    name="email1"
                    component={renderField} 
                    placeholder="E-mail*"          
                />        
            </div>
            <div>
                <Field          
                    type="email"         
                    name="email2"
                    component={renderField} 
                    placeholder="Re-enter E-mail*"          
                />       
            </div>
            <div>
                <Field          
                    type="text"           
                    name="address"
                    component={renderField}
                    placeholder="Address*"  
                />        
            </div>
            <div className={styles.csrz}>
                <div className={styles["quarter-city"]}>
                    <Field           
                        type="text"            
                        name="city"
                        component={renderField}
                        placeholder="City*"           
                    />          
                </div>
                <div className={styles["quarter-state"]}>
                    <Field                   
                        type="text"             
                        name="state"
                        component={renderField}
                        placeholder="State"            
                    />          
                </div>
                <div className={styles["quarter-region"]}>
                    <Field           
                        type="text"            
                        name="country"
                        component={renderField}
                        placeholder="Country/Region*"  
                    />            
                </div>
                <div className={styles["quarter-zip"]}>
                    <Field            
                        type="text"             
                        name="zipcode"
                        component={renderField}
                        placeholder="Zip/Postal Code"            
                    />          
                </div>
            </div>
            <div>
                <Field          
                    type="text"          
                    name="how_did_you_hear"
                    component={renderField} 
                    placeholder="How did you hear about us"          
                />        
            </div> 

            <button type="submit"  className={stylesApp.submitBtn} >
        Submit
            </button>
        </form>
    );};

export default reduxForm({
    form: "info",
    validate
})(InfoForm);