import { Mnemonic } from "@components/Mnemonic";
import Page from "@components/Page";
import DashboardLayout from "@layouts/dashboard/DashboardLayout";

const PAGE_TITLE = "Mnemonic";

mnemonic.getLayout = (page) => (
  <DashboardLayout pageTitle={PAGE_TITLE}>{page}</DashboardLayout>
);

export default function mnemonic() {
  return (
    <Page title={PAGE_TITLE}>
      <Mnemonic />
    </Page>
  );
}
