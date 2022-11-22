import Page from "@components/Page";
import DashboardLayoutwithFooter from "@layouts/dashboard/DashboardLayoutwithFooter";
import { Donations } from "@sections/donations";

const PAGE_TITLE = "DonationsPage";

DonationsPage.getLayout = (page) => (
  <DashboardLayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardLayoutwithFooter>
);

export default function DonationsPage() {
  return (
    <Page title={PAGE_TITLE}>
      <Donations />
    </Page>
  );
}
