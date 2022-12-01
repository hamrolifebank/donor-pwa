import Page from "@components/Page";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { PasscodeForm } from "@sections/passcode";
const PAGE_TITLE = "Create/Update Passcode";
Passcode.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function Passcode() {
  return (
    <Page title={PAGE_TITLE}>
      <PasscodeForm />
    </Page>
  );
}
