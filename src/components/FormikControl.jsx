import React from "react";
import Input from "./Input";
import Select from "./Select";
import ChakraInput from "./ChakraInput";
import ChakraSelect from "./ChakraSelect";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
    case "select":
      return <Select {...rest} />;
    case "radio":
    case "checkbox":
    case "date":
    case "chakrainput":
      return <ChakraInput {...rest} />;
    case "chakraselect":
      return <ChakraSelect {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
