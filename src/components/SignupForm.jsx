import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./SignupForm.css";

const SignupForm = (props) => {
  const { palaces } = props;
  const { countries } = props;

  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      Email: "",
      Palace: "select",
      Country: "select",
    },
    validationSchema: Yup.object({
      Email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios({
        method: "post",
        url: "https://prod-01.westeurope.logic.azure.com:443/workflows/ec35268b892f4f1fb71b9259a761cb95/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=fEQpHovIyBNYS5VsPXFvaBPaQlBRgt2diFWLfH6cf5c",
        data: {
          Email: values.Email,
          Palace: values.Palace,
          Country: values.Country,
          MAC: "00:00:00:00:00:00"
        }
      })
        .then(function (res) {
          console.log(res);
          alert("Successfully signed up!");
        })
        .catch(function (res) {
          console.log(res);
        });
    },
  });
  return (
    <form className="form-component" onSubmit={formik.handleSubmit}>
      <label htmlFor="Email">Email Address</label>
      <div className="py-2">
        <input
          className="form-control block w-full"
          id="Email"
          name="Email"
          type="Email"
          placeholder="Enter email address"
          onChange={formik.handleChange}
          value={formik.values.Email}
        />
        {formik.errors.Email ? (
          <div className="text-red-600">{formik.errors.Email}</div>
        ) : null}
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
            id="Palace"
            name="Palace"
            type="text"
            value={formik.values.Palace}
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
            id="Country"
            name="Country"
            type="text"
            value={formik.values.Country}
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
