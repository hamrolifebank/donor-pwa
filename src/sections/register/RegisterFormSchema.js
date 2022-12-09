import * as Yup from "yup";

export const RegisterFormSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is required")
    .min(8, "Mininum 6 characters")
    .max(24, "Maximum 15 characters"),
  phone: Yup.number().required("Phone number is required").min(8, "Mininum 10"),
  email: Yup.string()
    .required("Email is required")
    .email("That is not an email"),
  dob: Yup.date().nullable().required("Birth Date is required"),
  bloodGroup: Yup.string().nullable().required("Please select a BloodGroup"),
  gender: Yup.string().required("Gender is required"),
});
