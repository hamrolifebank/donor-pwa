import Page from "@components/Page";
import LandingPage from "@sections/landing-page/LandingPage";
import DashboardLayout from "@layouts/dashboard/DashboardLayout";

const PAGE_TITLE = "Home";

Home.getLayout = (page) => (
  <DashboardLayout pageTitle={PAGE_TITLE}>{page}</DashboardLayout>
);

export default function Home() {
  return (
    <Page title={PAGE_TITLE}>
      <LandingPage />
    </Page>
  );
}
