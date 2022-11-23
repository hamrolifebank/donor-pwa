import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import AddDonations from "@sections/donations/addDonations";

const PAGE_TITLE = "Donations";

addDonationsPage.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function addDonationsPage() {
  return (
    <Page title={PAGE_TITLE}>
      <AddDonations />
    </Page>
  );
}
