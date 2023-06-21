import { Formik, Form } from "formik";
import { useState, useRef } from "react";
import * as Yup from "yup";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import Modal from "./Modal";
import ENV from "../env";
import FormikControl from "./FormikControl";
import Header from "./Header";
import FooterComponent from "./FooterComponent";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  palace: Yup.string()
    .required("Please select a palace")
    .notOneOf(["Select"], "Please select a palace."),
});

const SignupForm = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { palaces, countries } = props;
  const ref = useRef(null);
  const [showLoader, setShowLoader] = useState(false);
  const [showLoader1, setShowLoader1] = useState(false);

  const initialValues = {
    email: "",
    palace: "",
    country: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    setShowLoader(true);
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
        setTimeout(() => {
          window.location = getRedirectUrl();
        }, 4000);
      })
      .catch((errors) => {
        console.log(errors);
      });
    openModal();
  };

  const onSkip = () => {
    setShowLoader1(true);
    setTimeout(() => {
      window.location = getRedirectUrl();
    }, 4000);
  };

  const openModal = () => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getRedirectUrl = () => {
    let redirectUrl = "";
    switch (ref.current.values.palace) {
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
    return redirectUrl;
  };

  return (
    <div className="text-left p-4 md:mx-auto md:px-20 md:py-[24px]">
      {isModalOpen && (
        <Modal
          title="Form successfully submitted"
          onClose={closeModal}
          email={ref.current.values.email}
        />
      )}
      <Header />
      <Formik
        innerRef={ref}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="md:max-w-[65%] text-[#2c3e50]">
          <div className="mb-[16px]">
            <FormikControl
              control="chakrainput"
              type="email"
              label="Email address: *"
              name="email"
              placeholder="Enter email address"
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
          <Button
            type="submit"
            onSubmit={onSubmit}
            isLoading={showLoader}
            disabled={showLoader}
            colorScheme="white"
          >
            Sounds Great, Sign me up
          </Button>
          <Button
            type="button"
            onClick={onSkip}
            isLoading={showLoader1}
            disabled={showLoader1}
            colorScheme="white"
            loadingText="Skip"
          >
            Skip
          </Button>
        </Form>
      </Formik>
      <FooterComponent />
    </div>
  );
};

export default SignupForm;
