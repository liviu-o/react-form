import { Formik, Form, useFormikContext } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import Modal from "./Modal";
import "./SignupForm.css";
import ENV from "../env";
import FormikControl from "./FormikControl";
import Header from "./Header";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  palace: Yup.string()
    .required("Please select a palace")
    .notOneOf(["Select"], "Please select a palace."),
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

  const handleReset = () => {
    const formik = useFormikContext();
    const { values } = formik;

    // Reset form values
    formik.resetForm();

    // Access the values for further processing if needed
    console.log(values);
  };

  const onSubmit = (values) => {
    console.log(values);
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
    <div className="body-container text-left mx-auto px-4 py-[24px]">
      {isModalOpen && (
        <Modal
          title="Submission Successful"
          content="Thank you for submitting the form!"
          onClose={closeModal}
        />
      )}
      <Header />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="max-w-[65%] text-[#2c3e50]">
          <div className="mb-[16px]">
            <FormikControl
              control="chakrainput"
              type="email"
              label="Email address: *"
              name="email"
            />
            <small
              id="exampleInputGroup1__BV_description_"
              className="form-text text-muted"
            >
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="py-2">
            <FormikControl
              control="chakraselect"
              label="The palace I am visiting:*"
              name="palace"
              options={palaces}
              className="mb-[16px]"
            />
            <FormikControl
              control="chakraselect"
              label="The country I am visiting from:"
              name="country"
              options={countries}
              className="mb-[16px]"
            />
          </div>
          <button
            className="w-full block bg-black text-white my-2 p-2 rounded-sm"
            type="submit"
            title="Sounds Great, Sign me up"
          >
            Sounds Great, Sign me up
          </button>
          <button
            className="w-full block bg-black text-white my-2 p-10 rounded-sm"
            type="reset"
            onClick={handleReset}
            title={"Skip"}
          >
            Skip
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
