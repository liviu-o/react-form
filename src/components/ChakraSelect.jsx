import React from "react";
import {
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Field } from "formik";

const ChakraSelect = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <FormControl isInvalid={form.errors[name] && form.touched[name]}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Select id={name} {...rest} {...field}>
              {options.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                );
              })}
            </Select>
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default ChakraSelect;
