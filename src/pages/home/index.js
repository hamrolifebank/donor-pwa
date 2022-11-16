import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";

const PAGE_TITLE = "Home";

HomePage.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function HomePage() {
  return <Page title={PAGE_TITLE}>Wallet Page</Page>;
}
