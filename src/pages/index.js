import Page from "@components/Page";

// import MnemonicGuard from "@guards/MnemonicGuard";
import { Home } from "@sections/home";

import DashboardLayout from "@layouts/dashboard/DashboardLayout";

const PAGE_TITLE = "Home";

HomePage.getLayout = (page) => (
  <DashboardLayout pageTitle={PAGE_TITLE}>{page}</DashboardLayout>
);

export default function HomePage() {
  return (
    <Page title={PAGE_TITLE}>
      <Home />
    </Page>
  );
}
