import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { Donations } from "@sections/donations";

const PAGE_TITLE = "Donations";

DonationsPage.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function DonationsPage() {
  return (
    <Page title={PAGE_TITLE}>
      <Donations />
    </Page>
  );
}
