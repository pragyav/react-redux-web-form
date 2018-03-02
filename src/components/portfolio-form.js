import React from "react";
import { Field, reduxForm } from "redux-form";

const PortfolioForm = props => {

    const { handleSubmit } = props;
    return (   
        <form onSubmit={handleSubmit}>
            <p>3. Portfolio</p>
            <hr />
            <p>
          Prove you are IBM's next great designer by showing us who you are.
          What you've done.How you think.Tell us your story.
            </p>
            <div>
                <Field 
                    type="url" 
                    name="portfolio" 
                    placeholder="Porfolio Link*" 
                    component= "input"/>
            </div>
            <div>
                <Field 
                    name="user_message" 
                    placeholder="Anything else (another link, availability etc.)?" 
                    component= "textarea"/>
            </div>
            <button type="submit" value="Submit" className="portfolioSubmitBtn">   Submit
            </button>
        </form>
    );
};

export default reduxForm({
    form: "portfolio"
})(PortfolioForm);