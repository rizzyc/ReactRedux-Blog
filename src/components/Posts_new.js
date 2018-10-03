import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
  renderField(field) {
    //   simple destructuring
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return (
      <div className={className}>
        <label htmlFor="title">{field.label}</label>
        <input
          id={field.name}
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => this.props.history.push("/"));
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title" label="Title" component={this.renderField} />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field name="content" label="Content" component={this.renderField} />
        <button className="btn btn-primary" type="submit">
          Publish
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

// Helper function
function validate(values) {
  // redux form always has errors object
  const errors = {};
  // if erors has any properties, redux forms form is invalid
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }
  // If errors is empty, the form is fine to submit
  return errors;
}

// how do we combine redux form with connect
export default reduxForm({
  validate,
  form: "PostsNewForm"
})(
  connect(
    null,
    { createPost }
  )(PostsNew)
);
