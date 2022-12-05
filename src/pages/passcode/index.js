import { MnemonicPage } from "@sections/mnemonic";
import Page from "@components/Page";
import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import { useAppContext } from "@contexts/AppContext";
import { EnterPasscode } from "@sections/passcode";

const PAGE_TITLE = "Enter Passcode";

Passcode.getLayout = (page) => (
  <DashboardLayout pageTitle={PAGE_TITLE}>{page}</DashboardLayout>
);

export default function Passcode() {
  return (
    <Page title={PAGE_TITLE}>
      <EnterPasscode />
    </Page>
  );
}
