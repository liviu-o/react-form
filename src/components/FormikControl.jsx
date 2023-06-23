import ChakraInput from "./ChakraInput";
import ChakraSelect from "./ChakraSelect";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "chakrainput":
      return <ChakraInput {...rest} />;
    case "chakraselect":
      return <ChakraSelect {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
