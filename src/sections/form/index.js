import * as Yup from "yup";

export const RegisterFormSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is required")
    .min(5, "Mininum 5 characters")
    .max(50, "Maximum 50 characters"),
  phone: Yup.number().required("Phone number is required").min(8, "Mininum 8"),
  email: Yup.string()
    .required("Email is required")
    .email("That is not an email"),
  dob: Yup.date().nullable().required("Birth Date is required"),
});
