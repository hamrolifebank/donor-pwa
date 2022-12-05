import Page from "@components/Page";
import { RegisterPage } from "@sections/register";
import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import UpdateProfileForm from "@sections/register/Register";

const PAGE_TITLE = "Register";

register.getLayout = (page) => (
  <DashboardLayout pageTitle={PAGE_TITLE}>{page}</DashboardLayout>
);

export default function register() {
  return (
    <Page title={PAGE_TITLE}>
      <UpdateProfileForm />
    </Page>
  );
}
