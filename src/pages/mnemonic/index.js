import { MnemonicPage } from "@sections/mnemonic";
import Page from "@components/Page";
import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import { useAppContext } from "@contexts/AppContext";

const PAGE_TITLE = "Mnemonic";

mnemonic.getLayout = (page) => (
  <DashboardLayout pageTitle={PAGE_TITLE}>{page}</DashboardLayout>
);

export default function mnemonic() {
  return (
    <Page title={PAGE_TITLE}>
      <MnemonicPage />
    </Page>
  );
}
