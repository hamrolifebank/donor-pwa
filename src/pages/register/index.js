import Page from "@components/Page";
import { Register } from "@components/Register";
import DashboardLayout from "@layouts/dashboard/DashboardLayout";

const PAGE_TITLE = "Home";

Home.getLayout = (page) => (
  <DashboardLayout pageTitle={PAGE_TITLE}>{page}</DashboardLayout>
);

export default function Home() {
  return (
    <Page title={PAGE_TITLE}>
      <Register />
    </Page>
  );
}
