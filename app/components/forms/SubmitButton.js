import React from "react";

import AppButton from "../AppButton";
import { useFormikContext } from "formik";
const SubmitButton = ({ children }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton onPress={handleSubmit}>{children}</AppButton>;
};

export default SubmitButton;
