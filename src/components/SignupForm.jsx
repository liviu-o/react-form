import { Formik, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import Modal from "./Modal";
import "./SignupForm.css";
import ENV from "../env";
import Button from "./Button";
import FormikControl from "./FormikControl";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  palace: Yup.string().required("Required"),
});

const SignupForm = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { palaces, countries } = props;

  const openModal = () => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const initialValues = {
    email: "",
    palace: "",
    country: "",
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
    //Call api
    let postData = {
      email: values.email,
      country: values.country,
      MAC: window.location.pathname,
      palace: values.palace,
    };

    axios
      .post(ENV, postData)
      .then((result) => {
        console.log(result, postData);
      })
      .catch((errors) => {
        console.log(errors);
      });

    openModal();
    let redirectUrl = "";
    switch (values.palace) {
      case "Hampton Court Palace":
        redirectUrl = "https://www.hrp.org.uk/hampton-court-palace/";
        break;
      case "Tower Of London":
        redirectUrl = "https://www.hrp.org.uk/tower-of-london/";
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
    setTimeout(() => {
      window.location = redirectUrl;
    }, 4000);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form-component p-20">
          <FormikControl
            control="input"
            type="email"
            label="Email address:*"
            name="email"
          />
          <small
            id="exampleInputGroup1__BV_description_"
            className="form-text text-muted"
          >
            We'll never share your email with anyone else.
          </small>
          <div className="py-2">
            <FormikControl
              control="select"
              label="The palace I am visiting:*"
              name="palace"
              options={palaces}
            />
            <FormikControl
              control="select"
              label="The country I am visiting from:"
              name="country"
              options={countries}
            />
          </div>
          <Button type="submit" title={"Sounds Great, Sign me up"} />
          <Button type="reset" title={"Skip"} />
        </Form>
      </Formik>

      {isModalOpen && (
        <Modal
          title="Submission Successful"
          content="Thank you for submitting the form!"
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default SignupForm;
