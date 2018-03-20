/* @flow */
import React from "react";
import { Field, reduxForm } from "redux-form";
import type { FormProps } from "redux-form";
import styles from "../styles/components/skills-form.scss";
import stylesApp from "../styles/components/App.scss";

console.log("styles: ",styles);

type Props = FormProps

const SkillsForm = (props: Props) => {

    const { handleSubmit } = props;
 
    const db = {

        disciplines: [
            { label: "Design Research", checked: false, id: "desresearch" }, 
            { label: "Visual Design", checked: false, id: "visdesign" }, 
            { label: "UX Design", checked: false, id: "uxdesign" }, 
            { label: "Front-end Dev", checked: false, id: "frontenddev" }
        ],

        skills: [
            { label: "Visual Design", checked: false, id: "visualdes" }, 
            { label: "UX Design", checked: false, id: "uxdes" }, 
            { label: "Front-end Development", checked: false, id: "frontdev" }
        ],

        locations: [
            { label: "Austin, Texas", checked: false, id: "texas" }, 
            { label: "New York, New York", checked: false, id: "newyork" }, 
            { label: "Toronto, Canada", checked: false, id: "canada" }, 
            { label: "Shanghai, China", checked: false, id: "china" }, 
            { label: "Dublin, Ireland", checked: false, id: "ireland" }, 
            { label: "Hursley, United Kingdom", checked: false, id: "uk" }, 
            { label: "Boeblingen, Germany", checked: false, id: "germany" }, 
            { label: "Somewhere else", checked: false, id: "somewhere" }
        ] 
    };  

    const disciplineInputs = db.disciplines.map((disciplineOpt, i) => ( <div className={styles.skillDiv} key={i}>
        <Field            
            type="radio"
            name="disciplines"
            value={disciplineOpt.id}
            component= "input"
            id={disciplineOpt.id}
        />
        <label className={styles.skillLabel} htmlFor={disciplineOpt.id}>
            {disciplineOpt.label}
        </label>
    </div>
    )
    );    

    const skillsInputs = db.skills.map((skillOpt, i) => (
        <div key={i}>
            <Field
                type="checkbox"
                component= "input"
                name={skillOpt.id} 
                id={skillOpt.id}    
            />
            <label htmlFor={skillOpt.id}>{skillOpt.label}</label>
        </div>
    ));
    const locationInputs = db.locations.map((locationOpt, i) => (
        <div key={i}>
            <Field
                type="checkbox"
                component= "input"
                name={locationOpt.id}
                id={locationOpt.id}
            />
            <label htmlFor={locationOpt.id}>{locationOpt.label}</label>
        </div>
    ));

    return (
        <form onSubmit={handleSubmit}>
            <p>2. Skills and location</p>
            <hr />
            <p>Which is your primary design discipline?</p>

            <div className={styles.primaryskill}>
                {disciplineInputs}
            </div>

            <div className={styles.experience}>
                <div id="discipline">
                    <p>Do you have experience with any other disciplines?</p>
                    {skillsInputs}
                </div>

                <div id="working">
                    <p>Where are you interested in working?</p>
                    <p>
              You must be legally authorized to work without visa
              sponsorship in the location you choose.
                    </p>
                    {locationInputs}
                </div>
            </div>

            <button type="submit" value="Submit" className={stylesApp.submitBtn} id={styles.confirm}>          
          Submit
            </button>
        </form>
    );
};


export default reduxForm({
    form: "skills"
})(SkillsForm);
