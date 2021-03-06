import React from "react";
import { Form, Field } from "react-final-form";
 
const StreamForm = (props) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
 
  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };
 
  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };
 
  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={(formValues) => {
        const errors = {};
 
        if (!formValues.title) {
          errors.title = "You must enter a title";
        }
 
        if (!formValues.description) {
          errors.description = "You must enter a description";
        }
 
        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="ui form error">
          <Field name="title" component={renderInput} label="Enter Title" />
          <Field
            name="description"
            component={renderInput}
            label="Enter Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      )}
    />
  );
};
 
export default StreamForm;


























// import React from "react";
// import { Field, reduxForm } from "redux-form";
// import { Link } from "react-router-dom";

// class StreamForm extends React.Component {
//   renderError = ({ error, touched }) => {
//     if (touched && error) {
//       return (
//         <div className="ui error message">
//           <div className="header">{error}</div>
//         </div>
//       );
//     }
//   };
//   renderInput = (formProps) => {
    

//     const fieldError = `field ${
//       formProps.meta.error && formProps.meta.touched ? "error" : null
//     }`;
//     return (
//       <div className={fieldError}>
//         <label>{formProps.label}</label>
//         <input
//           // onChange={formProps.input.onChange}
//           // value={formProps.input.value}
//           // or shorter syntax {...formProps.input} takes the formProps input property (that is an  objext that contains the value prop and onchange) and add them are properties to the input element
//           {...formProps.input}
//           autoComplete="off"
//         />
//         {this.renderError(formProps.meta)}
//       </div>
//     );
//   };

//   onSubmit = (formValues) => {
//     this.props.onSubmit(formValues)
//   };
//   render() {
    
//     return (
//       <form
//         className="ui form error"
//         onSubmit={this.props.handleSubmit(this.onSubmit)}
//         // handleSubmit comes from redux-form
//       >
//         <Field name="title" component={this.renderInput} label="Enter Title" />
//         <Field
//           name="description"
//           component={this.renderInput}
//           label="Enter Description"
//         />
//         {/* Field doesnt know what a 'label' is. So because of this, it passes it to the component property and assigns it accordingly. this is how you can customize redux forms */}
//         <button className="ui button primary">Submit</button>
//       </form>
//     );
//   }
// }

// const validate = (formValues) => {
//   const errors = {};
//   if (!formValues.title) {
//     errors.title = "you must enter a title";
//   }

//   if (!formValues.description) {
//     errors.description = "you must enter a description";
//   }

//   return errors;
// };

// export default reduxForm({
//   form: "streamForm",
//   validate: validate,
// })(StreamForm);


