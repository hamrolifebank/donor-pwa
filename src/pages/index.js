import Page from "@components/Page";

// import MnemonicGuard from "@guards/MnemonicGuard";

import DashboardLayout from "@layouts/dashboard/DashboardLayout";

const PAGE_TITLE = "Home";

Home.getLayout = (page) => (
  <DashboardLayout pageTitle={PAGE_TITLE}>{page}</DashboardLayout>
);

export default function Home() {
  return (
    <Page title={PAGE_TITLE}>
      <h1>This is home page</h1>
    </Page>
  );
}
