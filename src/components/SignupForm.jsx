import { useFormik } from "formik";
import { useState } from "react";
import "./SignupForm.css";

const SignupForm = (props) => {
  const { palaces } = props;
  const { countries } = props;

  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      selectedPalace: "",
      selectedCountry: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className="form-component" onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <div className="py-2">
        <input
          className="form-control block w-full"
          id="email"
          name="email"
          type="email"
          placeholder="Enter email address"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <small
          id="exampleInputGroup1__BV_description_"
          className="form-text text-muted"
        >
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="py-2">
        <label>
          Select an option:
          <select
            className="select-item"
            id="selectedPalace"
            name="selectedPalace"
            type="text"
            value={formik.values.selectedPalace}
            onChange={formik.handleChange}
          >
            {palaces.map((p) => (
              <option key={p.value} value={p.value}>
                {p.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="py-2">
        <label>
          Select an option:
          <select
            className="select-item"
            id="selectedCountry"
            name="selectedCountry"
            type="text"
            value={formik.values.selectedCountry}
            onChange={formik.handleChange}
          >
            {countries.map((p) => (
              <option key={p.value} value={p.value}>
                {p.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SignupForm;