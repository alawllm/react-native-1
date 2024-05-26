import { object, string, ref } from "yup";

export const validationSchema = object().shape({
  email: string().email().required(),
  password: string()
    .required("please enter your password")
    .min(8, "Password must be at least 8 characters"),
});
