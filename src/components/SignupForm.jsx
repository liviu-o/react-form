import {Formik, Form} from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./SignupForm.css";
import Button from './Button';

const initialValues = {
  email: "",
  palace: "",
  country: "",
}

const onSubmit = values => {
  alert(JSON.stringify(values, null, 2));
      //Call api
      axios({
        method: "post",
        url: "https://prod-01.westeurope.logic.azure.com:443/workflows/ec35268b892f4f1fb71b9259a761cb95/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=fEQpHovIyBNYS5VsPXFvaBPaQlBRgt2diFWLfH6cf5c",
        data: {
          email: values.email,
          palace: values.Palace,
          country: values.Country,
          MAC: "00:00:00:00:00:00",
        },
      })
        .then(function (res) {
          console.log(res);
          alert("Successfully signed up!");
        })
        .catch(function (res) {
          console.log(res);
        });
      let redirectUrl = "";
      switch (formik.values.Palace) {
        case "Hampton Court Palace":
          redirectUrl = "https://www.hrp.org.uk/hampton-court-palace/";
          break;
        case "Kensington Palace":
          redirectUrl = "https://www.hrp.org.uk/kensington-palace/";
          break;
        case "Banqueting House":
          redirectUrl = "https://www.hrp.org.uk/banqueting-house";
          break;
        case "Kew Palace":
          redirectUrl = "https://www.hrp.org.uk/kew-palace";
          break;
        default:
          redirectUrl = "https://www.hrp.org.uk";
      }
      window.location.href = redirectUrl;
}


  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    palace: Yup.string()
      .required("Please select a palace")
      .notOneOf(["Select"], "Please select a palace."),
  });


const SignupForm = (props) => {
  const { palaces } = props;
  const { countries } = props;

  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  console.log(formik.values)
  
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className="form-component">
        <label htmlFor="email">Email Address</label>
        <div className="py-2">
          <input
            className="form-control block w-full"
            id="email"
            name="email"
            type="email"
            placeholder="Enter email address"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.email}
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600">{formik.errors.email}</div>
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
              id="palace"
              name="palace"
              type="text"
              {...formik.getFieldProps('palace')}
            >
              {palaces.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.name}
                </option>
              ))}
            </select>
            {formik.touched.palace && formik.errors.palace ? (
              <div className="text-red-600">{formik.errors.palace}</div>
            ) : null}
          </label>
        </div>
        <div className="py-2">
          <label>
            Select an option:
            <select
              className="select-item"
              id="country"
              name="country"
              type="text"
              value={formik.values.country}
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
        <Button type="submit" title={'Sounds Great, Sign me up'} />
        <Button type="reset" title={'Skip'} />
      </Form>
     </Formik >
  );
};

export default SignupForm;
