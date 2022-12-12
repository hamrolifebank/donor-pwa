import Page from "@components/Page";
import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import Register from "@sections/register/RegisterPage";

const PAGE_TITLE = "Register";

register.getLayout = (page) => (
  <DashboardLayout pageTitle={PAGE_TITLE}>{page}</DashboardLayout>
);

export default function register() {
  return (
    <Page title={PAGE_TITLE}>
      <Register />
    </Page>
  );
}
