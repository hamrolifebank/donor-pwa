import Page from "@components/Page";
import Register from "@sections/register/Register";
import DashboardLayout from "@layouts/dashboard/DashboardLayout";

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
